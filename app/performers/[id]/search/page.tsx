import NewznabResultRow from '../../../components/NewznabItemRow'
import { getPerformer, searchNewznab } from '../../../utils'

export interface PageProps {
  searchParams?: {
    q?: string
  }
  params: {
    id: string
  }
}

export const revalidate = 10 // revalidate every 10 seconds

const Page = async ({ searchParams, params: { id } }: PageProps): Promise<JSX.Element> => {
  if (searchParams?.q == null) return <span>Error</span>

  const [items, performer] = await Promise.all([searchNewznab(searchParams.q, id), getPerformer(id)])
  if (performer == null) return <span>Error</span>

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
          {items.map(({ createdAt, updatedAt, publishedAt, ...rest }, index) => (
            <NewznabResultRow
              performerName={performer.name}
              {...rest}
              createdAt={createdAt.toISOString()}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Page
