import { Link } from 'react-router-dom'
import './Fruit.scss'

type FruitProps = {
  style: object,
  index: number,
  image: any,
  title: string,
  link?: string,
  callback: (state: boolean, element: number) => void
}

export default function Fruit(props: FruitProps) {
  const innerContent = <>
    {props.image}
    <h3 className='fruitTitle'>{props.title}</h3>
  </>

  return (
    props.link 
    ? <Link to={props.link} className='fruit' style={props.style}>
        {innerContent}
      </ Link> 
    : <button className='fruit' style={props.style} onClick={() => props.callback(true, props.index)}>
      {innerContent}
    </button>
  )
  
}