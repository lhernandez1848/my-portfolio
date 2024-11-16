
type ParagraphProps = {
  children: React.ReactNode,
  type: string
}

export default function Paragraph({ children, type}: ParagraphProps) {
  return <p className={type}>
    {children}
  </p>
}