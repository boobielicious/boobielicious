import Skeleton from '../../../components/Skeleton'

const Loading = (): JSX.Element => {
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
          {[...Array(100).keys()].map((value, index) => (
            <tr key={index}>
              <td>
                <Skeleton width={800} />
              </td>
              <td>
                <Skeleton width={80} />
              </td>
              <td>
                <Skeleton width={100} />
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Loading
