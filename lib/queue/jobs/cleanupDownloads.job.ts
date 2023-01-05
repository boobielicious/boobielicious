import { NewznabItemStatus } from '@prisma/client'
import { Job } from 'bullmq'
import * as fs from 'fs-extra'
import path from 'path'

import logger from '../../logger'
import { prisma } from '../../prisma'
import { stash } from '../../stash'
import { BackgroundJob, BaseJob } from '../job'

export class CleanupDownloads extends BaseJob implements BackgroundJob {
  constructor(public payload: Record<string, unknown>) {
    super()
  }

  handle = async (): Promise<void> => {
    const completedItems = (
      await prisma.newznabItem.findMany({
        where: { status: { equals: NewznabItemStatus.COMPLETED } }
      })
    ).filter(({ title }) => fs.existsSync(path.join(process.env.NZBGET_DOWNLOAD_PATH, title)))

    const itemsWithStashPerformer = await Promise.all(
      completedItems.map(async item => {
        const performer = await stash.findPerformer({ id: item.stashId })
        return { ...item, performerName: performer?.findPerformer?.name }
      })
    )

    if (itemsWithStashPerformer.length > 0) {
      logger.info(`Found ${itemsWithStashPerformer.length} completed downloads`)
    }

    itemsWithStashPerformer.forEach(({ queryName, title, performerName }) => {
      const performerFolder = path.join(process.env.NZBGET_DOWNLOAD_PATH, performerName ?? queryName)
      const oldPath = path.join(process.env.NZBGET_DOWNLOAD_PATH, title)
      const newPath = path.join(performerFolder, title)

      fs.mkdirSync(path.join(performerFolder, process.env.PERFORMER_DROPZONE_FOLDER), { recursive: true })
      logger.info(`Moving ${oldPath} to ${newPath}...`)
      fs.renameSync(oldPath, newPath)
    })
  }

  failed = (job: Job): void => {
    logger.error(`Job (${this.name} with ID: ${job.id ?? 'unknown'} has failed)`)
  }
}
