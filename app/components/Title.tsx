interface Props {
  title: string
}

const Head = ({ title }: Props): JSX.Element => {
  return (
    <>
      <title>{`${title} | Boobielicious\xAE`}</title>
    </>
  )
}

export default Head
