import { useState } from "react";
import { COLOR_MODE } from "../lib/data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/layout.scss";
import ThemeToggle from "./Toggles/ThemeToggle";
import ColourToggle from "./Toggles/ColourToggle";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mode, setMode] = useState(localStorage.getItem('colorMode') ?? COLOR_MODE[0]);
  const [isDark, setIsDark] = useState((localStorage.getItem('isDark') === 'true'));

  const handleToggleMode = (mode: string) => {
    localStorage.setItem('colorMode', mode);
    setMode(mode);
  }

  const handleThemeChange = () => {
    localStorage.setItem('isDark', (!isDark).toString());
    setIsDark(!isDark);
  }

  return (
    <main className="lh-page-layout" data-theme={isDark ? 'dark' : 'light'} data-mode={mode}>
      <Navbar />
      <div className="toggles-container">
        <ThemeToggle isDark={isDark} handleThemeChange={handleThemeChange} />
        <ColourToggle mode={mode} handleChange={(mode) => handleToggleMode(mode)} />
      </div>
      {children}
      <Footer />
    </main>
  )
}