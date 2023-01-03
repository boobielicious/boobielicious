import 'server-only'

import { NewznabItem, NewznabItemStatus } from '@prisma/client'
import { GraphQLClient } from 'graphql-request'

import { getSdk, StashPerformerFieldsFragment } from '../generated/stash'
import { NZBGet } from './nzbget'
import { NZBHydra } from './nzbhydra'
import { convertCupSize, Performer } from './performer'
import { prisma } from './prisma'
import Twitter from './twitter'
import { promiseSerial } from './utils'

const stash = getSdk(new GraphQLClient(process.env.STASH_GRAPHQL_API))
const nzbget = new NZBGet({
  endpoint: process.env.NZBGET_JSONRPC_API,
  credentials: {
    username: process.env.NZBGET_USERNAME,
    password: process.env.NZBGET_PASSWORD
  }
})
const twitterClient = new Twitter(process.env.TWITTER_BEARER_TOKEN)
const nzbhydra = new NZBHydra(process.env.NZBHYDRA_API_KEY, process.env.NZBHYDRA_ENDPOINT)

const convertStashPerformer = (stashPerformer: StashPerformerFieldsFragment): Performer => {
  const { name, aliases, photo, hasFakeBoobs, isFavorite, measurements, instagram, twitter, id } = stashPerformer
  return {
    name: name as string,
    aliases:
      aliases != null
        ? aliases
            .split(',')
            .map(alias => alias.trimStart().trimEnd())
            .filter(alias => alias.length > 0)
        : [],
    photo: photo != null ? (photo.length > 0 ? photo : undefined) : undefined,
    images: photo != null ? [photo] : [],
    bandSize: measurements != null ? parseInt(measurements.split(/[a-zA-Z]/)[0], 10) : undefined,
    cupSize: measurements != null ? convertCupSize(measurements.split(/[\d]{2,3}/).join('')) : undefined,
    hasNaturalBoobs:
      hasFakeBoobs != null ? (hasFakeBoobs === 'No' ? true : hasFakeBoobs === 'Yes' ? false : undefined) : undefined,
    twitter: twitter != null ? (twitter.length > 0 ? twitter : undefined) : undefined,
    instagram: instagram != null ? (instagram.length > 0 ? instagram : undefined) : undefined,
    stashId: id,
    isFavorite
  }
}

export const getPerformers = async (): Promise<Performer[]> => {
  if (process.env.STASH_GRAPHQL_API == null) return []
  const { allPerformers } = await stash.allPerformers()

  if (allPerformers == null) return []
  return allPerformers.map(convertStashPerformer)
}

export const getPerformer = async (id: string): Promise<Performer | undefined> => {
  if (process.env.STASH_GRAPHQL_API == null) return undefined

  let performer: Performer | undefined
  try {
    const { findPerformer } = await stash.findPerformer({ id })
    if (findPerformer == null) return undefined
    performer = convertStashPerformer(findPerformer)
  } catch (error) {
    return undefined
  }
  if (performer == null) return undefined

  const { twitter } = performer
  const [instagramImages, twitterImages, freeOnesImages] = await Promise.all([
    [],
    twitter != null ? twitterClient.getImages(twitter).catch(() => []) : Promise.resolve([]),
    []
    // freeOnes != null ? getPerformerPhotos(freeOnes).catch(() => []) : Promise.resolve([])
  ])
  performer.images = performer.images.concat([...instagramImages, ...twitterImages, ...freeOnesImages])

  return performer
}

export const searchNewznab = async (q: string, stashId: string): Promise<NewznabItem[]> => {
  const [nzbhydraItems, nzbgetItems] = await Promise.all([nzbhydra.search(q), nzbget.getAllItems()])
  await promiseSerial(
    nzbhydraItems.map(
      ({ guid: id, url, ...item }) =>
        () =>
          prisma.newznabItem.upsert({
            where: { id },
            create: {
              id,
              url,
              ...item,
              queryName: q,
              stashId,
              status: getNewnabItemStatus(nzbgetItems.find(({ URL }) => URL === url)?.Status)
            },
            update: {
              url,
              queryName: q,
              stashId,
              status: getNewnabItemStatus(nzbgetItems.find(({ URL }) => URL === url)?.Status)
            }
          })
    )
  )

  const items = await prisma.newznabItem.findMany({
    where: { OR: [{ stashId: { equals: stashId } }, { queryName: { equals: q } }] },
    orderBy: { createdAt: 'desc' }
  })

  return items
}

export const getNewnabItemStatus = (status?: string): NewznabItemStatus => {
  if (status == null) return NewznabItemStatus.UNKNOWN

  if (status === 'QUEUED') return NewznabItemStatus.QUEUED
  if (status === 'PAUSED') return NewznabItemStatus.PAUSED
  if (status === 'DOWNLOADING') return NewznabItemStatus.DOWNLOADING
  if (status.includes('SUCCESS')) return NewznabItemStatus.COMPLETED
  if (status.includes('FAILURE')) return NewznabItemStatus.FAILED
  if (status.includes('SKIPPED')) return NewznabItemStatus.SKIPPED
  if (status.includes('DELETED')) return NewznabItemStatus.DELETED

  return NewznabItemStatus.UNKNOWN
}
