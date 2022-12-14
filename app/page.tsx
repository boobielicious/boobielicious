import Link from 'next/link'

import PerformerCard from './components/PerformerCard'
import { getPerformers } from './utils'

export const revalidate = 10 // revalidate every 10 seconds

const HomePage = async (): Promise<JSX.Element> => {
  const performers = await getPerformers()
  return (
    <main className="mx-4 flex min-h-content items-center justify-center">
      <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {performers.map(({ name, photo, hasNaturalBoobs, bandSize, cupSize, isFavorite, stashId }, index) => (
          <li key={index}>
            <Link href={stashId != null ? `/performers/${stashId}` : '#'}>
              <PerformerCard
                imageUrl={photo}
                name={name}
                isFavorite={isFavorite}
                label={`${hasNaturalBoobs != null ? (hasNaturalBoobs ? 'Natural ' : 'Fake ') : ''}${
                  bandSize != null ? bandSize : ''
                }${cupSize != null ? cupSize : ''}`}
                priority={index < 8}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage
