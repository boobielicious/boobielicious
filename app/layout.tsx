import './globals.css'

import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <header className="sticky top-0 z-10 mx-auto flex h-14 max-w-screen-xl items-center bg-neutral-50 px-4 dark:bg-neutral-900">
          <Link href="/" className="select-none text-xl font-bold tracking-tighter">
            <span className="sm:hidden">B</span>
            <span className="hidden sm:block">Booblielicious&reg;</span>
          </Link>
        </header>

        <div className="mx-auto max-w-screen-xl">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
