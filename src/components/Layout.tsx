import { useState } from "react";
import { COLOR_MODE } from "../lib/data";
import Toggle from "./Toggle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/layout.scss";

type LayoutProps = {
  children: React.ReactNode
}

const localPrefTheme = (localStorage.getItem('colorTheme') === 'true');
const localPrefMode = localStorage.getItem('colorMode');

export default function Layout({ children }: LayoutProps) {
  const [mode, setMode] = useState(localPrefMode ?? COLOR_MODE[0]);
  const [isDark, setIsDark] = useState(localPrefTheme ? localPrefTheme : false);

  const handleToggleMode = (mode: string) => {
    setMode(mode);
  }

  const handleThemeChange = () => {
    localStorage.setItem('colorTheme', isDark.toString());
    setIsDark(!isDark);
  }

  return (
    <main data-theme={isDark ? 'dark' : 'light'} data-mode={mode}>
      <Navbar />
      <Toggle mode={mode} theme={isDark} handleChange={(mode) => handleToggleMode(mode)} handleThemeChange={handleThemeChange} />
      {children}
      <Footer />
    </main>
  )
}