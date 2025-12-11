import { Group, Button } from '@mantine/core'
import './Navigation.css'

function Navigation({ currentPage, onPageChange }) {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'classes', label: 'Classes' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'aichat', label: 'AI Chat' },
    { id: 'about', label: 'About Me' }
  ]

  return (
    <nav className="navigation">
      <Group justify="center" gap="sm">
        {pages.map((page) => (
          <Button
            key={page.id}
            variant={currentPage === page.id ? 'filled' : 'subtle'}
            onClick={() => onPageChange(page.id)}
            className={currentPage === page.id ? 'nav-btn active' : 'nav-btn'}
          >
            {page.label}
          </Button>
        ))}
      </Group>
    </nav>
  )
}

export default Navigation
