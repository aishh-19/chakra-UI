import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {Heading , Button , ButtonGroup , Stack , Input,Text} from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Box>
  <Heading>
This is Heading
  </Heading>
  <Button colorScheme='blue'>Button</Button>
  <Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>
<Input placeholder='Basic usage' />
<Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
  </Box>
  
    </>
  )
}

export default App
