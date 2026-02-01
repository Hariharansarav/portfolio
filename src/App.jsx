import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Components/Portfolio'
import Portfolio from './Components/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Portfolio />
    </>
    
  )
}

export default App
