import {useState, useEffect } from 'react'
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
  const [score, setScore] = useState()
  const [bestScore, setbestScore] = useState(0)
  useEffect(() => {
    let bestScoreStorage = localStorage.getItem("best-score") || 0
    bestScoreStorage = Number(bestScoreStorage)
    localStorage.setItem("best-score", bestScoreStorage)
    setbestScore(bestScoreStorage)
  }, []);
  useEffect(() => {
    localStorage.setItem("best-score", bestScore)
  }, [bestScore]);

  return (
    <>
      <div className="background-foreground"></div>
      <Starfield />
      {showStartScreen && <StartScreen setScore={setScore} setShowStartScreen={setShowStartScreen} setShowMainScreen={setShowMainScreen} />}
      {showMainScreen && 
        (<>
          <MainScreen setbestScore={setbestScore} bestScore={bestScore} score={score} setScore={setScore} setGameover={setGameover} setShowMainScreen={setShowMainScreen}/> 
          <Help />
        </>)
      }
      {gameover && <GameOver score={score} bestScore={bestScore} setShowStartScreen={setShowStartScreen} setGameover={setGameover} />}
    </>
  )
}

export default App
