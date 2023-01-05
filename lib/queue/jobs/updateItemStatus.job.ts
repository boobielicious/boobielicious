import { Job } from 'bullmq'

import { getNewnabItemStatus } from '../../boobielicious'
import logger from '../../logger'
import { Item, nzbget } from '../../nzbget'
import { prisma } from '../../prisma'
import { promiseSerial } from '../../utils'
import { BackgroundJob, BaseJob } from '../job'

export class UpdateItemStatus extends BaseJob implements BackgroundJob {
  constructor(public payload: Record<string, unknown>) {
    super()
  }

  handle = async (): Promise<void> => {
    const [items, nzbgetItems] = await Promise.all([
      prisma.newznabItem.findMany({ orderBy: { updatedAt: 'asc' } }),
      nzbget.getAllItems()
    ])

    const updatedItems = await promiseSerial(
      items
        .filter(item => nzbgetItems.find(({ URL }) => URL === item.url) != null)
        .map(item => ({ item, nzbgetItem: nzbgetItems.find(({ URL }) => URL === item.url) as Item }))
        .filter(({ item, nzbgetItem }) => item.status !== getNewnabItemStatus(nzbgetItem.Status))
        .map(({ item, nzbgetItem }) =>
          item.url !== nzbgetItem?.NZBName && nzbgetItem.FileSizeMB > 0
            ? () =>
                prisma.newznabItem.update({
                  where: { url: item.url },
                  data: {
                    title: nzbgetItem.NZBName,
                    size: nzbgetItem.FileSizeMB,
                    status: getNewnabItemStatus(nzbgetItem.Status)
                  }
                })
            : () =>
                prisma.newznabItem.update({
                  where: { url: item.url },
                  data: { status: getNewnabItemStatus(nzbgetItem.Status) }
                })
        )
    )

    if (updatedItems.length > 0) {
      logger.info(`Updated the status of ${updatedItems.length} Newznab items.`)
    }
  }

  failed = (job: Job): void => {
    logger.error(`Job (${this.name} with ID: ${job.id ?? 'unknown'} has failed)`)
  }
}
