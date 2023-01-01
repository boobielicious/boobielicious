const sufixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

interface Props {
  bytes: number
}

const Bytes = ({ bytes }: Props): JSX.Element => {
  const getBytes = (bytes: number): string => {
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return bytes === 0 ? '0 Bytes' : `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`
  }

  return <span>{getBytes(bytes)}</span>
}

export default Bytes
