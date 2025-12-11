import { useState, useRef, useEffect } from 'react'
import { Container, Title, Text, Paper, Button, Textarea, Group, Box } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import './AIChatPage.css'

// Demo mode - set to false and add API key for real AI responses
const FORCE_DEMO_MODE = true

function AIChatPage() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatDisplayRef = useRef(null)

  const promptTemplate = 'Help me understand [topic] for my [class name] class'

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight
    }
  }, [messages])

  // Demo mode responses (no API key required)
  const getDemoResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('javascript') || lowerMessage.includes('programming')) {
      return "JavaScript is a versatile programming language primarily used for web development. It allows you to create interactive websites, handle user events, and manipulate the DOM (Document Object Model). Key concepts include variables, functions, loops, and objects. Keep practicing with small projects to build your skills!"
    } else if (lowerMessage.includes('history') || lowerMessage.includes('civilization')) {
      return "History helps us understand how past events shape our present world. When studying any historical period, try to identify key figures, major events, causes and effects, and how they connect to broader themes. Creating timelines and making connections between events can help you remember important details!"
    } else if (lowerMessage.includes('chemistry') || lowerMessage.includes('science')) {
      return "Chemistry is the study of matter and how it changes. Start by understanding atoms, elements, and the periodic table. Then move on to chemical reactions, bonding, and equations. Remember: practice balancing equations and understand why reactions happen, not just how!"
    } else if (lowerMessage.includes('film') || lowerMessage.includes('video') || lowerMessage.includes('cinematography')) {
      return "Film production combines technical skills with creative storytelling. Key elements include framing, lighting, sound design, and editing. Study the rule of thirds for composition, learn about different shot types (wide, medium, close-up), and practice with whatever camera you have available!"
    } else if (lowerMessage.includes('math') || lowerMessage.includes('algebra') || lowerMessage.includes('calculus')) {
      return "Mathematics builds on itself - make sure you understand foundational concepts before moving to advanced topics. Practice regularly, work through example problems step-by-step, and don't be afraid to ask for help when stuck. Showing your work helps identify where mistakes happen!"
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return "I'm here to help you learn! Tell me what subject or topic you're working on, and I'll do my best to explain it in a clear, helpful way. You can ask about homework, concepts you're confused about, or study strategies!"
    } else {
      return "That's a great question! While I'm running in demo mode, I can help you think through problems and provide study tips. For your specific question, I'd suggest breaking it down into smaller parts and tackling each one step by step. What specific aspect would you like to explore further?"
    }
  }

  const handleSendMessage = async () => {
    const message = inputValue.trim()
    if (!message || isLoading) return

    // Add user message
    setMessages(prev => [...prev, { content: message, isUser: true }])
    setInputValue('')
    setIsLoading(true)

    if (FORCE_DEMO_MODE) {
      // Simulate API delay for demo mode (1 second)
      setTimeout(() => {
        const response = getDemoResponse(message)
        setMessages(prev => [...prev, { content: response, isUser: false }])
        setIsLoading(false)
      }, 1000)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const useTemplate = () => {
    setInputValue(promptTemplate)
  }

  return (
    <Container size="md" py="xl">
      <Title order={2} ta="center" mb="md">AI Chat Assistant</Title>
      <Text ta="center" c="dimmed" mb="xl">
        Ask me anything about your classes!
      </Text>

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        {/* Chat Display */}
        <Box className="chat-display" ref={chatDisplayRef}>
          {messages.length === 0 ? (
            <Text className="welcome-message" ta="center" c="dimmed" fs="italic">
              👋 Welcome! Ask me anything to get started.
            </Text>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isUser ? 'user-message' : 'ai-message'}`}
              >
                {msg.content}
              </div>
            ))
          )}
          {isLoading && (
            <Text className="loading-indicator" ta="center" c="dimmed" fs="italic">
              🤔 Thinking...
            </Text>
          )}
        </Box>

        {/* Prompt Template Section */}
        <Paper className="prompt-section" p="md" mt="md" radius="md" withBorder>
          <Text fw={600} size="sm" mb="xs">💡 Suggested Question Template:</Text>
          <Text className="prompt-template" fs="italic" mb="sm">
            {promptTemplate}
          </Text>
          <Button size="xs" onClick={useTemplate}>
            Use This Template
          </Button>
        </Paper>

        {/* Input Section */}
        <Group mt="md" align="flex-end">
          <Textarea
            placeholder="Type your question here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            autosize
            minRows={2}
            maxRows={4}
            style={{ flex: 1 }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            leftSection={<IconSend size={16} />}
          >
            Send
          </Button>
        </Group>
      </Paper>

      <Text ta="center" c="dimmed" size="xs" mt="md">
        Running in demo mode - responses are pre-programmed examples
      </Text>
    </Container>
  )
}

export default AIChatPage
