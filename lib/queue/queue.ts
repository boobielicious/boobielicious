import { Queue, Worker } from 'bullmq'
import isEmpty from 'lodash.isempty'

import logger from '../logger'
import { concurrency, connection } from './config'
import { BackgroundJob } from './job'
import { getJobInstance } from './jobs/provider'

export const defaultQueueName = 'background-queue'
export const defaultQueue = new Queue(defaultQueueName, { connection })

export interface WorkerReply {
  status: number
  message: string
}

export const worker = new Worker<BackgroundJob, WorkerReply>(
  defaultQueueName,
  async job => {
    const instance = getJobInstance(job.data)

    if (isEmpty(instance)) {
      throw new Error(`Unable to find Job: ${job.data.name}`)
    }

    await instance.handle()
    return { status: 200, message: 'success' }
  },
  {
    connection,
    concurrency
  }
)

worker.on('active', job => {
  logger.info(`[JOB] ${job.name} is active`)
})

worker.on('completed', (job, result) => {
  logger.info(`[JOB] ${job.name} completed`)
})

worker.on('failed', job => {
  if (job != null) {
    const instance = getJobInstance(job.data)
    instance.failed(job)
    logger.error(`[JOB] ${job.name} has failed`)
  }
})
