import type { NextApiRequest, NextApiResponse } from 'next'

import { CleanupSortedVideos } from '../../../lib/queue/jobs'
import { defaultQueue } from '../../../lib/queue/queue'
import { HTTPMethod } from '../../../lib/utils'

const handler = async ({ method }: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (method) {
    case HTTPMethod.POST: {
      await defaultQueue.add(CleanupSortedVideos.name, new CleanupSortedVideos({}))
      res.status(201).end()
      break
    }

    default: {
      res.setHeader('Allow', [HTTPMethod.POST])
      res.status(405).end(`Method ${method ?? ''} not allowed`)
    }
  }
}

export default handler
