import { useEffect, useState } from "react";
import {
  Scripts,
  ScrollRestoration,
} from "react-router";
import Navbar from "./Navbar";
import "../css/global.scss";

export default function Body({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    localStorage.setItem('isDark', (!isDark).toString());
    setIsDark(!isDark);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(localStorage.getItem('isDark') === 'true');
    }
  }, [])

  return (
    <body data-theme={isDark ? 'dark' : 'light'} className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-no-repeat">
      <Navbar isDark={isDark} handleChange={handleChange} />
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  )
}