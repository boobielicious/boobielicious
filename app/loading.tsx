import PerformerCard from './components/PerformerCard'

const Loading = (): JSX.Element => {
  return (
    <main className="mx-4 flex min-h-content items-center justify-center">
      <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(12).keys()].map((value, index) => (
          <li key={index}>
            <PerformerCard loading />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Loading
