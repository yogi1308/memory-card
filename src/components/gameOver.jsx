import '../styles/gameover.css'

function GameOver(props) {
    return (
        <div className="gameover">
            <div className="score">
                <p className="best-score" >Best Score: {props.bestScore}</p>
                <p className="current-score">Current Score: {props.score}</p>
            </div>
            <h2 className='gameover-text' >GAME OVER</h2>
            <h2 className='restart' onClick={() => {props.setShowStartScreen(true); props.setGameover(false)}} >RESTART</h2>
        </div>
    )
}

export default GameOver