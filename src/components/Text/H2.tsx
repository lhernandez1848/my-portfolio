import "../../css/text.scss"

type H2Props = {
  title: string,
  type?: string
}

export default function H2({ title, type }: H2Props) {
  return <h2 className={type}>{title}</h2>
}