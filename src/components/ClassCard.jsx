import { Card, Text, Button, Group } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import './ClassCard.css'

function ClassCard({ block, name, time, description, canvasUrl, color }) {
 return (
   <Card shadow="sm" padding="lg" radius="md" withBorder className="class-card">
     <div className="card-header" style={{ borderLeftColor: color }}>
       <Text size="sm" fw={700} c="dimmed">
         {block}
       </Text>
       <Text size="lg" fw={700} mt="xs">
         {name}
       </Text>
       <Text size="sm" c="dimmed" mt={4}>
         {time}
       </Text>
     </div>

     <Text size="sm" mt="md" c="dimmed">
       {description}
     </Text>

     <Group mt="md">
       <Button
         component="a"
         href={canvasUrl}
         target="_blank"
         variant="light"
         rightSection={<IconExternalLink size={16} />}
       >
         Go to Canvas
       </Button>
     </Group>
   </Card>
 )
}

export default ClassCard
