import type { NextApiRequest, NextApiResponse } from 'next'

import { UpdateItemStatus } from '../../../lib/queue/jobs'
import { defaultQueue } from '../../../lib/queue/queue'
import { HTTPMethod } from '../../../lib/utils'

const handler = async ({ method }: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (method) {
    case HTTPMethod.PUT: {
      await defaultQueue.add(UpdateItemStatus.name, new UpdateItemStatus({}))
      res.status(200).end()
      break
    }

    default: {
      res.setHeader('Allow', [HTTPMethod.PUT])
      res.status(405).end(`Method ${method ?? ''} not allowed`)
    }
  }
}

export default handler
