import './List.scss'

export default function List(props: { listItems: any, class: string }) {
  const listItems = props.listItems;

  return <ul className={`${'unordered-list'} ${props.class}`}>
    {listItems.map((e: string, i: number) => {
      return <li key={i}>{e}</li>
    })}
  </ul>
}