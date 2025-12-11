import { useState } from 'react'
import { Container, Title, Text, Paper, Button, Group, Badge, List } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { classes } from '../data/classes'
import './ClassesPage.css'

function ClassesPage() {
  const [activeTab, setActiveTab] = useState(0)

  const activeClass = classes[activeTab]

  return (
    <Container size="xl" py="xl">
      <Title order={2} ta="center" mb="md">My Classes</Title>
      <Text ta="center" c="dimmed" mb="xl">
        Click on a tab to view class details
      </Text>

      {/* Tab Buttons */}
      <div className="tabs-container">
        {classes.map((classItem, index) => (
          <button
            key={classItem.id}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            style={{
              '--tab-color': classItem.color
            }}
          >
            {classItem.block}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Paper shadow="sm" p="xl" radius="md" withBorder className="tab-content">
        <div className="class-header" style={{ borderLeftColor: activeClass.color }}>
          <Badge color={activeClass.color} size="lg" mb="sm">
            {activeClass.block}
          </Badge>
          <Title order={3}>{activeClass.name}</Title>
          <Text c="dimmed" size="sm" mt="xs">{activeClass.time}</Text>
        </div>

        <Text mt="lg" mb="lg">
          {activeClass.description}
        </Text>

        <Title order={5} mb="sm">Class Information:</Title>
        <List spacing="xs" mb="lg">
          <List.Item>Block: {activeClass.block}</List.Item>
          <List.Item>Time: {activeClass.time}</List.Item>
          <List.Item>Canvas Course ID: {activeClass.canvasUrl.split('/').pop()}</List.Item>
        </List>

        <Group>
          <Button
            component="a"
            href={activeClass.canvasUrl}
            target="_blank"
            variant="filled"
            rightSection={<IconExternalLink size={16} />}
          >
            Open in Canvas
          </Button>
        </Group>
      </Paper>
    </Container>
  )
}

export default ClassesPage
