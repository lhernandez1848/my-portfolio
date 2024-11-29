import "../../css/cards.scss"

type CardProps = {
  children: React.ReactNode,
  type?: string
}

export default function Card({ children, type }: CardProps) {
  return <div className={"lh-card " + type}>
    {children}
  </div>
}