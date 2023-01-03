import NewznabResultRow from '../../../../components/NewznabItemRow'
import { searchNewznab } from '../../../../utils'

export interface PageProps {
  params: {
    q: string
    id: string
  }
}

export const revalidate = 10 // revalidate every 10 seconds

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
          {items.map(({ createdAt, updatedAt, publishedAt, ...rest }, index) => (
            <NewznabResultRow {...rest} createdAt={createdAt.toISOString()} key={index} />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Page
