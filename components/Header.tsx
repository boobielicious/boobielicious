'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'

const Header = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => setSearchValue(event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (searchValue.length > 0) {
      void (async () => {
        setSearchValue('')
      })()
    }
  }
  return (
    <header className="sticky top-0 z-10 mx-auto flex h-12 max-w-screen-xl items-center justify-between bg-neutral-50 px-4 dark:bg-neutral-900">
      <Link href="/" className="select-none text-2xl font-bold tracking-tighter">
        <span className="sm:hidden">B</span>
        <span className="hidden sm:block">Booblielicious&reg;</span>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          className="appearance-none rounded-none border-b border-neutral-300 bg-neutral-50 tracking-tight text-neutral-900 placeholder-neutral-300 outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:placeholder-neutral-700"
          type="search"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <input type="submit" hidden />
      </form>
    </header>
  )
}

export default Header
