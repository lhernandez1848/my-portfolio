import "../../css/text.scss"

type H1Props = {
  title: string,
  type?: string
}

export default function H1({ title, type }: H1Props) {
  return <h1 className={type}>{title}</h1>
}