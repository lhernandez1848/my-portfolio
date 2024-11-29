
interface ListProps {
  listItems: Array<string>|Array<React.ReactNode>,
  type?: string
}

export default function List({ listItems, type }: ListProps) {
  return <ul className={type}>
    {listItems.map((item, i) => {
      return <li key={i}>{item}</li>
    })}
  </ul>
} 