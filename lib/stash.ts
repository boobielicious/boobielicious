import 'server-only'

import { GraphQLClient } from 'graphql-request'
import { cache } from 'react'

import { getSdk, StashPerformerFieldsFragment } from '../generated/stash'
// import Twitter from '../lib/twitter'
import { convertCupSize, Performer } from './performer'

const client = new GraphQLClient(process.env.STASH_GRAPHQL_API)
const stash = getSdk(client)
// const twitterClient = new Twitter(process.env.TWITTER_BEARER_TOKEN)

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

// export const search = async (q: string): Promise<Performer[]> => {
//   const {
//     findPerformers: { performers }
//   } = await stash.findPerformers({ filter: { q } })
//   return performers.filter(({ name }) => name != null).map(convertStashPerformer)
// }

// export const getPerformer = async (id: string): Promise<Performer | undefined> => {
//   const { findPerformer } = await stash.findPerformer({ id })
//   if (findPerformer == null) return undefined
//   return convertStashPerformer(findPerformer)
// }

export const getAllPerformers = cache(async (): Promise<Performer[]> => {
  const { allPerformers } = await stash.allPerformers()
  if (allPerformers == null) return []
  return allPerformers.map(convertStashPerformer)
})

export const getPerformer = cache(async (id: string): Promise<Performer | undefined> => {
  const { findPerformer } = await stash.findPerformer({ id })
  if (findPerformer == null) return undefined

  const performer = convertStashPerformer(findPerformer)
  // const { twitter } = performer
  const [instagramImages, twitterImages, freeOnesImages] = await Promise.all([
    [],
    [], // twitter != null ? twitterClient.getImages(twitter).catch(() => []) : Promise.resolve([]),
    []
    // freeOnes != null ? getPerformerPhotos(freeOnes).catch(() => []) : Promise.resolve([])
  ])
  performer.images = performer.images.concat([...instagramImages, ...twitterImages, ...freeOnesImages])

  return performer
})

export default stash
