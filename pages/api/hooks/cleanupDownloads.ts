import type { NextApiRequest, NextApiResponse } from 'next'

import { CleanupDownloads } from '../../../lib/queue/jobs'
import { defaultQueue } from '../../../lib/queue/queue'
import { HTTPMethod } from '../../../lib/utils'

const handler = async ({ method }: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (method) {
    case HTTPMethod.POST: {
      await defaultQueue.add(CleanupDownloads.name, new CleanupDownloads({}))
      res.status(200).end()
      break
    }

    default: {
      res.setHeader('Allow', [HTTPMethod.POST])
      res.status(405).end(`Method ${method ?? ''} not allowed`)
    }
  }
}

export default handler
