import { Container, Title, Text, Grid } from '@mantine/core'
import Header from './components/Header'
import ClassCard from './components/ClassCard'
import WeekDay from './components/WeekDay'
import Footer from './components/Footer'
import { classes } from './data/classes'
import './App.css'


function App() {
 return (
   <div className="App">
     <Header />


     <Container size="xl" py="xl">
       <WeekDay />


       <Title order={2} ta="center" mb="md">My 4 Classes</Title>
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
     </Container>


     <Footer
       schoolName="Jefferson Academy Secondary"
       email="your.name@jajags.com"
     />
   </div>
 )
}


export default App
