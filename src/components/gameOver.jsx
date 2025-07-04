import '../styles/gameover.css'

function GameOver(props) {
    return (
        <div className="gameover">
            <div className="score">
                <p className="best-score">Best Score: {props.bestScore}</p>
                <p className="current-score">Current Score: {props.score}</p>
            </div>
            <h2>GAME OVER</h2>
            <h2 className='restart'>RESTART</h2>
        </div>
    )
}

export default GameOver