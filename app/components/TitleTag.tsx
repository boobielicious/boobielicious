interface Props {
  title: string
}

const TitleTag = ({ title }: Props): JSX.Element => {
  return <title>{`${title} | Boobielicious\xAE`}</title>
}

export default TitleTag
