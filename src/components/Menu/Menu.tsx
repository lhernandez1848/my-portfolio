import { Link } from 'react-router-dom'
import './Menu.scss'

export default function Menu() {
  return <>
    <Link to='/' className='menu-link'>Home</Link>
  </>
}