import { Paper, Text } from '@mantine/core'

function WeekDay() {
 // Array of day names
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

 // Get today's date
 const today = new Date()

 // Get day of week (0-6, where 0 is Sunday)
 const dayNumber = today.getDay()

 // Get day name from array
 const dayName = days[dayNumber]

 return (
   <Paper shadow="sm" p="lg" radius="md" withBorder style={{ textAlign: 'center', marginBottom: '2rem' }}>
     <Text size="sm" c="dimmed" mb={4}>Today is</Text>
     <Text size="xl" fw={700} c="blue">{dayName}</Text>
   </Paper>
 )
}

export default WeekDay
