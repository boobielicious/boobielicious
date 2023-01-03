import { NewznabItemStatus } from '@prisma/client'
import { IoCloudDone, IoCloudDownload, IoCloudOffline, IoCloudOutline } from 'react-icons/io5'
import { MdDeleteForever, MdError, MdPauseCircle } from 'react-icons/md'

import { searchNewznab } from '../../../../../lib/boobielicious'
import Bytes from '../../../../components/Bytes'

export interface PageProps {
  params: {
    q: string
    id: string
  }
}

export const revalidate = 10 // revalidate every 10 seconds

const getStatusIcon = (status: NewznabItemStatus): JSX.Element => {
  switch (status) {
    case 'FAILED':
      return <MdError className="text-red-500 dark:text-red-300" />
    case 'COMPLETED':
      return <IoCloudDone className="text-green-500 dark:text-green-300" />
    case 'DELETED':
      return <MdDeleteForever className="text-neutral-500 dark:text-neutral-300" />
    case 'DOWNLOADING':
      return <IoCloudDownload className="text-yellow-500 dark:text-yellow-300" />
    case 'PAUSED':
      return <MdPauseCircle className="text-orange-500 dark:text-orange-300" />
    case 'QUEUED':
      return <IoCloudDownload className="text-neutral-500 dark:text-neutral-300" />
    case 'SKIPPED':
      return <IoCloudOffline className="text-neutral-500 dark:text-neutral-300" />
    default:
      return <IoCloudOutline />
  }
}

const Page = async ({ params: { q: encodedQ, id } }: PageProps): Promise<JSX.Element> => {
  const q = decodeURIComponent(encodedQ)
  const items = await searchNewznab(q, id)
  return (
    <main className="mx-4">
      <table className="w-full table-auto">
        <thead className="sticky top-14 bg-neutral-50 text-left dark:bg-neutral-900">
          <tr>
            <th>Title</th>
            <th>Size</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {items.map(({ title, size, createdAt, url, status }, index) => (
            <tr key={index} className="hover:bg-neutral-200 hover:dark:bg-neutral-800">
              <td className="break-all">{title}</td>
              <td>
                <Bytes bytes={size * Math.pow(1024, 2)} />
              </td>
              <td>{new Intl.DateTimeFormat('de').format(new Date(createdAt))}</td>
              <td>{getStatusIcon(status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Page
