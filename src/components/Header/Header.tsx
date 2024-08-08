import './Header.scss'

interface HeaderProps {
  title: string
}

export default function Header({title}: HeaderProps) {
  return (
    <header>
      <span className='dec-square'></span>
      <h1>{title}</h1>
    </header>
  );
}
