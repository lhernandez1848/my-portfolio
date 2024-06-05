import './List.scss'

type ListProps = {
  listItems: any,
  class: string
}

export default function List(props: ListProps) {
  const listItems = props.listItems;

  return <ul className={`${'unordered-list'} ${props.class}`}>
    {listItems.map((e: string, i: number) => {
      return <li key={i}>{e}</li>
    })}
  </ul>
}