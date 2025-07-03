import { useEffect, useState } from 'react'
import './App.css'
import StartScreen from './components/startScreen'
import MainScreen from './components/mainScreen'
import Help from './components/help'
import {getPokemons} from './api/getPokemons.js'

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true)
  const [showMainScreen, setShowMainScreen] = useState(false)
  useEffect(() => {getPokemons(); console.log('pokemons')}, [])

  return (
    <>
      {showStartScreen && <StartScreen setShowStartScreen={setShowStartScreen} setShowMainScreen={setShowMainScreen} />}
      {showMainScreen && 
        (<>
          <MainScreen /> 
          <Help />
        </>)
      }
    </>
  )
}

export default App
