import DefaultTags from '../../components/DefaultTags'
import Title from '../../components/TitleTag'
import { getPerformer } from '../../utils'
import { type PageProps } from './page'

const Head = async ({ params: { id } }: PageProps): Promise<JSX.Element> => {
  const performer = await getPerformer(id)
  return (
    <>
      <Title title={performer?.name ?? 'Home of the melon queens'} />
      <DefaultTags />
    </>
  )
}

export default Head
