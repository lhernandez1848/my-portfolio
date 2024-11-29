import "../../css/cards.scss"

interface CardProps {
  children: React.ReactNode
}

export default function PageCard({ children }: CardProps ) {

  return <article className="page-card lh-card">
    {children}
  </article>
}