import "../../css/text.scss"

type H6Props = {
  title: string,
  type?: string
}

export default function H6({ title, type }: H6Props) {
  return <h6 className={type}>{title}</h6>
}