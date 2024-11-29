import "../../css/text.scss"

type H4Props = {
  title: string,
  type?: string
}

export default function H4({ title, type }: H4Props) {
  return <h4 className={type}>{title}</h4>
}