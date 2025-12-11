import { Container, Text, Group } from '@mantine/core'
import './Footer.css'

function Footer({ schoolName, email }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container size="xl">
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © {currentYear} {schoolName}
          </Text>
          <Text size="sm" c="dimmed">
            Contact: {email}
          </Text>
        </Group>
      </Container>
    </footer>
  )
}

export default Footer
