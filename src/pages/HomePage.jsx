import { Container, Title, Text, Grid, Paper } from '@mantine/core'
import ClassCard from '../components/ClassCard'
import WeekDay from '../components/WeekDay'
import { classes } from '../data/classes'
import './HomePage.css' // Home page styles

function HomePage({ calendarEmbedUrl }) {
  return (
    <Container size="xl" py="xl">
      <WeekDay />

      <Title order={2} ta="center" mb="md">My Classes</Title>
      <Text ta="center" c="dimmed" mb="xl">
        Current Quarter
      </Text>

      <Grid>
        {classes.map((classItem) => (
          <Grid.Col
            key={classItem.id}
            span={{ base: 12, sm: 6, lg: 3 }}
          >
            <ClassCard {...classItem} />
          </Grid.Col>
        ))}
      </Grid>

      <Title order={2} ta="center" mt="xl" mb="md">Upcoming Assignments</Title>
      <Paper shadow="sm" p="md" radius="md" withBorder>
        {calendarEmbedUrl ? (
          <div className="calendar-embed-container">
            <iframe
              src={calendarEmbedUrl}
              style={{ border: 0 }}
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              title="Upcoming Assignments Calendar"
            ></iframe>
          </div>
        ) : (
          <Text ta="center" c="dimmed" py="xl">
            Connect your Google Calendar to see upcoming assignments here.
          </Text>
        )}
      </Paper>
    </Container>
  )
}

export default HomePage
