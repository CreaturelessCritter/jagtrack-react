import { Container, Title, Text, Paper, Image, Badge, Grid, Card, List, Group, Stack, Divider } from '@mantine/core'
import { IconCode, IconDeviceGamepad2, IconSchool, IconBriefcase } from '@tabler/icons-react'
import './AboutPage.css'

function AboutPage() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} ta="center" mb="md">About Me</Title>
      <Text ta="center" c="dimmed" mb="xl">
        Get to know me better
      </Text>

      <Grid gutter="lg">
        {/* Profile Card */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder className="profile-card">
            <Card.Section>
              <Image
                src="/images/profile.jpg"
                height={200}
                alt="Profile photo"
                fallbackSrc="https://via.placeholder.com/300x300?text=Add+Photo"
              />
            </Card.Section>

            <Stack mt="md" gap="xs">
              <Title order={3} ta="center">Travis Sarbin</Title>
              <Group justify="center" gap="xs">
                <Badge color="blue" variant="light">11th Grade</Badge>
                <Badge color="green" variant="light">Junior</Badge>
              </Group>
              <Text ta="center" c="dimmed" size="sm">
                Jefferson Academy Secondary
              </Text>
            </Stack>
          </Card>
        </Grid.Col>

        {/* Info Section */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="lg">
            {/* Interests Card */}
            <Paper shadow="sm" p="lg" radius="md" withBorder>
              <Group mb="md">
                <IconDeviceGamepad2 size={24} />
                <Title order={4}>Interests & Hobbies</Title>
              </Group>
              <Group gap="sm">
                <Badge size="lg" variant="filled" color="violet">Technology</Badge>
                <Badge size="lg" variant="filled" color="grape">Gaming</Badge>
                <Badge size="lg" variant="filled" color="blue">Programming</Badge>
              </Group>
            </Paper>

            {/* Academic Goals Card */}
            <Paper shadow="sm" p="lg" radius="md" withBorder>
              <Group mb="md">
                <IconSchool size={24} />
                <Title order={4}>Academic Goals</Title>
              </Group>
              <List spacing="sm">
                <List.Item>Excel in JavaScript and web development</List.Item>
                <List.Item>Learn advanced programming concepts</List.Item>
                <List.Item>Build portfolio-worthy projects</List.Item>
              </List>
            </Paper>

            {/* Career Goals Card */}
            <Paper shadow="sm" p="lg" radius="md" withBorder>
              <Group mb="md">
                <IconBriefcase size={24} />
                <Title order={4}>Career Goals</Title>
              </Group>
              <Text>
                I'm interested in pursuing a career in Software Development and Technology.
                I enjoy solving problems with code and building applications that people can use.
              </Text>
            </Paper>

            {/* Favorite Classes Card */}
            <Paper shadow="sm" p="lg" radius="md" withBorder>
              <Group mb="md">
                <IconCode size={24} />
                <Title order={4}>Favorite Classes</Title>
              </Group>
              <List spacing="sm">
                <List.Item>JavaScript Programming - Learning to code and build web apps</List.Item>
                <List.Item>Film Production - Creating videos and learning cinematography</List.Item>
              </List>
            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider my="xl" />

      {/* Skills Section */}
      <Title order={3} ta="center" mb="lg">Skills I'm Developing</Title>
      <Group justify="center" gap="md">
        <Badge size="xl" variant="light" color="blue">HTML</Badge>
        <Badge size="xl" variant="light" color="orange">CSS</Badge>
        <Badge size="xl" variant="light" color="yellow">JavaScript</Badge>
        <Badge size="xl" variant="light" color="cyan">React</Badge>
        <Badge size="xl" variant="light" color="green">Problem Solving</Badge>
      </Group>
    </Container>
  )
}

export default AboutPage
