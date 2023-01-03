import Image from 'next/image'
import Link from 'next/link'
import { IoDownload, IoHeart, IoHeartOutline, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

import Popup from '../../components/Popup'
import { getPerformer } from '../../utils'

export interface PageProps {
  params: {
    id: string
  }
}

export const revalidate = 10 // revalidate every 10 seconds

const Page = async ({ params: { id } }: PageProps): Promise<JSX.Element> => {
  const performer = await getPerformer(id)
  if (performer == null) return <span>Error</span>

  const { name, aliases, hasNaturalBoobs, bandSize, cupSize, twitter, instagram, isFavorite, images } = performer
  const label =
    performer != null
      ? `${hasNaturalBoobs != null ? (hasNaturalBoobs ? 'Natural ' : 'Fake ') : ''} ${bandSize ?? ''}${cupSize ?? ''}`
      : undefined

  return (
    <main className="performer-main flex">
      <aside className="fixed left-0 bottom-0 z-10 flex flex-col justify-center bg-neutral-50 dark:bg-neutral-900 lg:sticky lg:top-12 lg:h-content">
        <div className="p-4 lg:mx-24 lg:p-0">
          <h1 className="text-3xl font-bold leading-none tracking-tighter md:text-4xl">{name}</h1>
          <span className="block font-light tracking-tight md:text-lg">{label}</span>

          <div className="mt-2 flex lg:mt-4">
            <button className="mr-2 hover:text-red-400 focus:outline-none">
              {isFavorite != null ? (
                isFavorite ? (
                  <IoHeart className="h-full w-6 text-red-400" />
                ) : (
                  <IoHeartOutline className="h-full w-6" />
                )
              ) : null}
            </button>

            <Popup
              position="top center"
              keepTooltipInside=".performer-main"
              trigger={
                <button className="mr-2 hover:text-neutral-400 focus:outline-none">
                  {id != null ? <IoDownload className="h-full w-6" /> : null}
                </button>
              }
            >
              <ul className="border bg-neutral-50 p-4 outline-none dark:bg-neutral-900">
                {[name].concat(aliases).map((name, index) => (
                  <Link key={index} href={`/performers/${id}/nzbhydra/${name}`}>
                    <li className="font-bold text-neutral-900 hover:text-neutral-400 dark:text-neutral-50">{name}</li>
                  </Link>
                ))}
              </ul>
            </Popup>

            {twitter != null && (
              <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                <IoLogoTwitter className="mr-2 h-full w-6 hover:text-blue-400" />
              </a>
            )}
            {instagram != null && (
              <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="h-full w-6 hover:text-pink-400" />
              </a>
            )}
          </div>
        </div>
      </aside>

      <ul>
        {images.map((img, index) => (
          <li key={index}>
            <Image
              className="h-content w-screen object-cover object-top contrast-125 saturate-0 filter transition-filter duration-300 ease-in-out hover:saturate-25"
              src={img}
              alt={name ?? ''}
              width={384}
              height={512}
              sizes="100vw"
              quality={100}
              priority={index === 0}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Page
