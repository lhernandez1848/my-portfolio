import Arrow from '../../svg/Arrow';

export default function FallingArrow(props) {
  const dots = [];

  for (let i = 0; i < props.number; i++) {
    dots.push(<Arrow key={i} />)
  }

  return dots
}