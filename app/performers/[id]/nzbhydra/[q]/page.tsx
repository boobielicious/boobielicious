import { search } from '../../../../../lib/nzbhydra'
import Bytes from '../../../../components/Bytes'

export interface PageProps {
  params: {
    q: string
    id: string
  }
}

export const revalidate = 10 // revalidate every 10 seconds

const Page = async ({ params: { q: encodedQ, id } }: PageProps): Promise<JSX.Element> => {
  const q = decodeURIComponent(encodedQ)
  const items = await search(q)
  return (
    <main className="mx-4">
      <table className="w-full table-auto">
        <thead className="sticky top-12 bg-neutral-50 text-left dark:bg-neutral-900">
          <tr>
            <th>Title</th>
            <th>Size</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {items.map(({ title, size, createdAt, url }, index) => (
            <tr key={index} className="hover:bg-neutral-200 hover:dark:bg-neutral-800">
              <td className="break-all">{title}</td>
              <td>
                <Bytes bytes={size * Math.pow(1024, 2)} />
              </td>
              <td>{new Intl.DateTimeFormat('de').format(new Date(createdAt))}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Page
