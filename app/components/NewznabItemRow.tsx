'use client'

import { NewznabItemStatus } from '@prisma/client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { IoCloudDone, IoCloudDownload, IoCloudOffline, IoCloudOutline } from 'react-icons/io5'
import { MdDeleteForever, MdError, MdPauseCircle } from 'react-icons/md'

import { groupReleaseRegEx, HTTPMethod } from '../../lib/utils'
import Bytes from './Bytes'

interface Props {
  title: string
  size: number
  createdAt: string
  status: NewznabItemStatus
  url: string
}

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

const NewznabItemRow = ({ createdAt, size, title, status, url }: Props): JSX.Element => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  // Create inline loading UI
  const isMutating = isFetching || isPending

  const downloadNewznabItem = async (url: string): Promise<void> => {
    setIsFetching(true)

    // Mutate external data source
    await fetch('/api/nzbget/add', {
      method: HTTPMethod.POST,
      body: JSON.stringify({ url }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    setIsFetching(false)

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh()
    })
  }

  return (
    <tr
      className={clsx(
        'hover:bg-neutral-200',
        'hover:dark:bg-neutral-800',
        title.match(groupReleaseRegEx) != null ? 'bg-green-50 dark:bg-green-900' : ''
      )}
    >
      <td className="break-all">
        <button
          className="hover:font-bold"
          disabled={isMutating}
          onClick={() => {
            void (async () => {
              await downloadNewznabItem(url)
            })()
          }}
        >
          {title}
        </button>
      </td>
      <td>
        <Bytes bytes={size * Math.pow(1024, 2)} />
      </td>
      <td>{new Intl.DateTimeFormat('de').format(new Date(createdAt))}</td>
      <td>{getStatusIcon(status)}</td>
    </tr>
  )
}

export default NewznabItemRow
