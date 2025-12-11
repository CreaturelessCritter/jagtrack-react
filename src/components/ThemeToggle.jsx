import { ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import './ThemeToggle.css'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <ActionIcon
      variant="light"
      size="lg"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
    </ActionIcon>
  )
}

export default ThemeToggle
