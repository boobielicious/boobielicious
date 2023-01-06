import Title from '../../../components/TitleTag'
import { PageProps } from './page'

const Head = ({ searchParams: { q } }: PageProps): JSX.Element => {
  return <Title title={`Results for ${q ?? 'unknown'}`} />
}

export default Head
