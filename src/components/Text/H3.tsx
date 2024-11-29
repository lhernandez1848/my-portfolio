import "../../css/text.scss"

type H3Props = {
  title: string,
  type?: string
}

export default function H3({ title, type }: H3Props) {
  return <h3 className={type}>{title}</h3>
}