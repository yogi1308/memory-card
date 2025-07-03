import '../styles/gameover.css'

function GameOver() {
    return (
        <div className="gameover">
            <div className="score">
                <p className="best-score">Best Score: 8</p>
                <p className="current-score">Current Score: </p>
            </div>
            <h2>GAME OVER</h2>
            <h2 className='restart'>RESTART</h2>
        </div>
    )
}

export default GameOver