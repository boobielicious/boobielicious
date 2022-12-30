import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

import Skeleton from './Skeleton'

interface Props {
  className?: string
  name?: string
  label?: string
  imageUrl?: string
  isFavorite?: boolean
  loading?: boolean
  priority?: boolean
}

const PerformerCard = ({ className, name, imageUrl, label, isFavorite, loading, priority }: Props): JSX.Element => {
  const classNames = ['', className].filter(Boolean).join(' ').trim()
  return (
    <div className={classNames}>
      <div className="relative">
        {loading != null ? (
          <Skeleton height={470} />
        ) : (
          <Image
            className="min-w-48 h-120 w-full object-cover object-top contrast-125 saturate-25 filter transition-filter duration-300 ease-in-out hover:saturate-75"
            src={imageUrl ?? ''}
            alt={name ?? ''}
            width={384}
            height={512}
            priority={priority}
          />
        )}

        <div className="pointer-events-none absolute left-0 bottom-0 flex justify-between bg-neutral-50 pt-4 pr-4 dark:bg-neutral-900">
          <div>
            <span className="block text-3xl font-bold leading-7 tracking-tighter md:text-4xl md:leading-7">
              {name ?? <Skeleton width={200} />}
            </span>
            <span className="block font-light tracking-tight lg:text-lg">{label ?? <Skeleton />}</span>
          </div>

          <div className="ml-4 flex flex-col justify-between">
            {isFavorite != null ? (
              isFavorite ? (
                <IoHeart className="h-6 w-6 text-red-400" />
              ) : (
                <IoHeartOutline className="h-6 w-6 text-red-400" />
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformerCard
