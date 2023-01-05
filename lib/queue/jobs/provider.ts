import { plainToInstance } from 'class-transformer'

import { BackgroundJob } from '../job'
import { CleanupDownloads } from './cleanupDownloads.job'
import { CleanupSortedVideos } from './cleanupSortedVideos.job'
import { UpdateItemStatus } from './updateItemStatus.job'

export const JobDictionary = new Map([
  [CleanupDownloads.name, CleanupDownloads],
  [CleanupSortedVideos.name, CleanupSortedVideos],
  [UpdateItemStatus.name, UpdateItemStatus]
])

export const getJobInstance = (data: BackgroundJob): BackgroundJob => {
  const jobClass = JobDictionary.get(data.name)
  if (jobClass != null) {
    return plainToInstance(jobClass, data)
  }
  // eslint-disable-next-line
  return {} as BackgroundJob
}
