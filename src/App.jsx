import {useState } from 'react'
import './App.css'
import StartScreen from './components/startScreen'
import MainScreen from './components/mainScreen'
import Help from './components/help'
import Starfield from './components/StarField'
import GameOver from './components/gameOver'

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true)
  const [showMainScreen, setShowMainScreen] = useState(false)
  const [gameover, setGameover] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setbestScore] = useState(0)
  return (
    <>
      <Starfield />
      {showStartScreen && <StartScreen setShowStartScreen={setShowStartScreen} setShowMainScreen={setShowMainScreen} />}
      {showMainScreen && 
        (<>
          <MainScreen setbestScore={setbestScore} bestScore={bestScore} score={score} setScore={setScore} setGameover={setGameover} setShowMainScreen={setShowMainScreen}/> 
          <Help />
        </>)
      }
      {gameover && <GameOver score={score} bestScore={bestScore} />}
    </>
  )
}

export default App
