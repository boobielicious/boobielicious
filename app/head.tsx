import DefaultTags from './components/DefaultTags'
import TitleTag from './components/TitleTag'

const Head = (): JSX.Element => {
  return (
    <>
      <TitleTag title="Home of the melon queens" />
      <DefaultTags />
    </>
  )
}

export default Head
