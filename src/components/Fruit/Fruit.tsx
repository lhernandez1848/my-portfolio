import './Fruit.scss'

export default function Fruit(props: { style: object; index: number; image: any; title: string, callback: (state: boolean, element: number) => void }) { 
  return <button className='fruit' style={props.style} onClick={() => props.callback(true, props.index)}>
    {props.image}
    <h3 className='fruitTitle'>{props.title}</h3>
  </button>
}