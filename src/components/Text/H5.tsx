import "../../css/text.scss"

type H5Props = {
  title: string,
  type?: string
}

export default function H5({ title, type }: H5Props) {
  return <h5 className={type}>{title}</h5>
}