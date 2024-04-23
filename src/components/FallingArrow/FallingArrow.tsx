import Arrow from '../../svg/Arrow';

export default function FallingArrow(props: { number: number } ) {
  const arrows = [];

  for (let i = 0; i < props.number; i++) {
    arrows.push(<Arrow key={i} />)
  }

  return <>{arrows}</>
}