import Title from '../../../components/TitleTag'
import { PageProps } from './page'

const Head = ({ searchParams }: PageProps): JSX.Element => {
  return <Title title={`Results for ${searchParams?.q ?? 'unknown'}`} />
}

export default Head
