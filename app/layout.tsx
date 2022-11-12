import './globals.css'

import Header from '../components/Header'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <Header />
        <main className="mx-auto max-w-screen-xl">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
