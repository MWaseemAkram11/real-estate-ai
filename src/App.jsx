import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workspace from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Workspace />
    </>
  )
}

export default App
