import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ClassesPage from './pages/ClassesPage'
import CalendarPage from './pages/CalendarPage'
import AIChatPage from './pages/AIChatPage'
import AboutPage from './pages/AboutPage'
import { getCurrentTheme, toggleTheme as toggleThemeUtil } from './themeToggle'
import './themes.css'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Theme state - initialized from utility
  const [theme, setTheme] = useState(getCurrentTheme)

  // Sync theme state when it changes externally
  useEffect(() => {
    const currentTheme = getCurrentTheme()
    if (currentTheme !== theme) {
      setTheme(currentTheme)
    }
  }, [])

  const handleToggleTheme = () => {
    const newTheme = toggleThemeUtil()
    setTheme(newTheme)
  }

  // Google Calendar embed URL
  const calendarEmbedUrl = 'https://calendar.google.com/calendar/embed?src=7vlchrviuvpd44nlf8t1dhk9en8gnpsh%40import.calendar.google.com&ctz=America%2FDenver'

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage calendarEmbedUrl={calendarEmbedUrl} />
      case 'classes':
        return <ClassesPage />
      case 'calendar':
        return <CalendarPage calendarEmbedUrl={calendarEmbedUrl} />
      case 'aichat':
        return <AIChatPage />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage calendarEmbedUrl={calendarEmbedUrl} />
    }
  }

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={handleToggleTheme} />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {renderPage()}

      <Footer
        schoolName="Jefferson Academy Secondary"
        email="travis.sarbin@jajags.com"
      />
    </div>
  )
}

export default App
