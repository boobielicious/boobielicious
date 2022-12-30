import Skeleton from '../../components/Skeleton'

const Loading = (): JSX.Element => {
  return (
    <main className="performer-main flex">
      <aside className="fixed left-0 bottom-0 z-10 flex flex-col justify-center bg-neutral-50 dark:bg-neutral-900 lg:sticky lg:top-12 lg:h-content">
        <div className="p-4 lg:mx-24 lg:p-0">
          <h1 className="text-3xl font-bold leading-none tracking-tighter md:text-4xl">
            <Skeleton width={150} />
          </h1>
          <span className="block font-light tracking-tight md:text-lg">
            <Skeleton />
          </span>
          <Skeleton />
        </div>
      </aside>

      <div className="h-content w-screen">
        <Skeleton className="h-full" />
      </div>
    </main>
  )
}

export default Loading
