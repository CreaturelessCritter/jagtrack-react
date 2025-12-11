import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <h1>JagTrack</h1>
          <h2>Your Academic Success Hub</h2>
        </div>
        <div className="header-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  )
}

export default Header
