import Title from '../../../../components/Title'
import { PageProps } from './page'

const Head = ({ params: { q: encodedQ } }: PageProps): JSX.Element => {
  return <Title title={`Results for ${decodeURIComponent(encodedQ)}`} />
}

export default Head
