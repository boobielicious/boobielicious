import { type Job } from 'bullmq'
import * as fs from 'fs-extra'
import path from 'path'

import logger from '../../logger'
import { stash } from '../../stash'
import { type BackgroundJob, BaseJob } from '../job'

export class CleanupSortedVideos extends BaseJob implements BackgroundJob {
  constructor(public payload: Record<string, unknown>) {
    super()
  }

  handle = async (): Promise<void> => {
    const { allPerformers: performers } = await stash.allPerformers()

    const unwantedFiles = ['@eaDir', '.DS_Store']

    performers
      .filter(({ name }) => name != null)
      .map(({ name }) => {
        const performerDropzone = path.join(
          process.env.NZBGET_DOWNLOAD_PATH,
          name as string,
          process.env.PERFORMER_DROPZONE_FOLDER
        )
        const performerTargetFolder = path.join(process.env.PERFORMERS_PATH, name as string)

        if (fs.pathExistsSync(performerDropzone)) {
          const files = fs.readdirSync(performerDropzone).filter(name => !unwantedFiles.includes(name))
          if (files.length > 0) {
            fs.mkdirSync(performerTargetFolder, { recursive: true })
            files.forEach(fileName => {
              const oldPath = path.join(performerDropzone, fileName)
              const newPath = path.join(performerTargetFolder, fileName)
              logger.info(`Moving ${oldPath} to ${newPath}...`)
              fs.moveSync(oldPath, newPath, { overwrite: true })
            })
          }

          logger.info(`Processed ${files.length} items for ${name as string}`)
          return {
            name: name as string,
            sortedVideoCount: files.length
          }
        }
        return {
          name: name as string,
          sortedVideoCount: 0
        }
      })
      .filter(({ sortedVideoCount }) => sortedVideoCount > 0)
  }

  failed = (job: Job): void => {
    logger.error(`Job (${this.name} with ID: ${job.id ?? 'unknown'} has failed)`)
  }
}
