import { useState } from 'react'
import './App.css'
import Resume from './components/Resume/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <head>
    <link rel="icon" href="portfolio-vector-icon.jpg"/>
      <title>Michel Leger's Porfolio</title>
    </head>
      <Resume/>
    </>
  )
}

export default App