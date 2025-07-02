import { useState } from 'react'
import './App.css'
import StartScreen from './components/startScreen'

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true)

  return (
    <>
      {showStartScreen && <StartScreen setShowStartScreen={setShowStartScreen} />}
    </>
  )
}

export default App
