import { Link } from 'react-router-dom'
import { useTheme } from "../hooks/useTheme"

export default function Header() {
  const [isDark, setIsDark] =  useTheme()
  
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">
            <span className="brand-mark">
              <i className="fa-solid fa-earth-americas" />
            </span>
            Where in the world?
          </Link>
        </h2>
        <button
          type="button"
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode', !isDark)
          }}
        >
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  )
}
