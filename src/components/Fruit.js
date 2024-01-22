import { Link } from 'react-router-dom';
import styles from './components.module.css';

export default function Fruit(props) {
  const innerContent = <>
    {props.image}
    <h3 className={styles.fruitTitle}>{props.title}</h3>
  </>
  const content = props.link 
    ? <Link to={props.link} className={styles.fruit} style={props.style}>{innerContent}</Link >
    : <button className={styles.fruit} style={props.style} onClick={() => props.modalCallback()}>{innerContent}</button>

  return content;
}