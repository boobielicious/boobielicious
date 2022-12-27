import './globals.css'

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <div className="mx-auto max-w-screen-xl">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
