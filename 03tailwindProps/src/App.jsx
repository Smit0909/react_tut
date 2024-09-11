import { useState } from 'react'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-pink-300 text-black p-2 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card name='Sushmita' btnText='Share'/>
      <Card name='Varunita'/> 
    </>
  )
}

export default App
