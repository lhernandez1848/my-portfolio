import { useEffect, useState } from "react";
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
    <body data-theme={isDark ? 'dark' : 'light'} className="h-full font-sans text-gray-900 bg-no-repeat bg-fixed">
      <Navbar isDark={isDark} handleChange={handleChange} />
      {children}
    </body>
  )
}