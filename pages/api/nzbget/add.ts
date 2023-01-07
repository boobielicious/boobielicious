import { NewznabItem } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

import { downloadNewznab } from '../../../lib/boobielicious'
import { HTTPMethod } from '../../../lib/utils'

export interface UrlParams {
  url: string
  performerName: string
}

export const isUrl = (obj: any): obj is UrlParams => obj.url !== undefined && obj.performerName !== undefined

const handler = async ({ method, body }: NextApiRequest, res: NextApiResponse<NewznabItem>): Promise<void> => {
  switch (method) {
    case HTTPMethod.POST: {
      if (!isUrl(body)) {
        res.status(400).end('Invalid params')
        return
      }
      const { url, performerName } = body

      const item = await downloadNewznab(url, performerName)
      if (item != null) {
        res.status(200).json(item)
        return
      }

      res.status(401).end()
      break
    }

    default: {
      res.setHeader('Allow', [HTTPMethod.POST])
      res.status(405).end(`Method ${method ?? ''} not allowed`)
    }
  }
}

export default handler
