import '../../css/toggle.scss'

type ThemeToggleProps = {
  handleThemeChange: () => void,
  isDark: boolean
}

export default function ThemeToggle({ handleThemeChange, isDark }: ThemeToggleProps) {
  return (
    <button onClick={handleThemeChange} className='darkmode-toggle-button'>
      <div className="darkmode_icon">
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
        <span className="ray"></span>
      </div>
    </button>
  )
}