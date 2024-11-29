import "../../css/text.scss"

type ParagraphProps = {
  children: React.ReactNode,
  type?: string
}

export default function P({ children, type}: ParagraphProps) {
  return <p className={type}>
    {children}
  </p>
}