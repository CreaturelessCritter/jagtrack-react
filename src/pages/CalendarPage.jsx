import { Container, Title, Text, Paper } from '@mantine/core'
import './CalendarPage.css'

function CalendarPage({ calendarEmbedUrl }) {
  return (
    <Container size="xl" py="xl">
      <Title order={2} ta="center" mb="md">My Calendar</Title>
      <Text ta="center" c="dimmed" mb="xl">
        View your Canvas assignments and deadlines
      </Text>

      <Paper shadow="sm" p="md" radius="md" withBorder>
        {calendarEmbedUrl ? (
          <div className="calendar-container">
            <iframe
              src={calendarEmbedUrl}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </div>
        ) : (
          <div className="calendar-placeholder">
            <Text ta="center" c="dimmed" size="lg" mb="md">
              Calendar Not Connected
            </Text>
            <Text ta="center" c="dimmed" size="sm">
              Follow the setup instructions to connect your Google Calendar with Canvas assignments.
            </Text>
          </div>
        )}
      </Paper>

      {/* Mobile tip */}
      <Text ta="center" c="dimmed" size="sm" mt="md">
        📱 Tip: On mobile, you can{' '}
        <a href={calendarEmbedUrl} target="_blank" rel="noopener noreferrer">
          open the calendar in a new tab
        </a>{' '}
        for a better experience.
      </Text>
    </Container>
  )
}

export default CalendarPage
