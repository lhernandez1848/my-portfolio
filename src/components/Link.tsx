import { Link } from "react-router-dom";
import "../css/links.scss";

type LinkProps = {
  type?: string,
  link: string,
  children: React.ReactNode,
  target?: string,
  rel?: string
}

export default function CustomLink({ type, link, children, target, rel }: LinkProps) {
  return <Link to={link} className={type} target={target} rel={rel}>{children}</Link>
}