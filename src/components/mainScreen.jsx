import '../styles/mainScreen.css'
import {displayPokemons, onScreenPokemons} from '../helperFunctions/displayPokemons'
import { allClickedPokemons, allNonClickedPokemons, allIDs } from '../api/getPokemons'
import pokeBallLogo from '../assets/poke-ball-card-logo.webp'

function MainScreen(props) {
    function determinGameOver(e) {
        const pokemonName = e.target.closest('.card').querySelector('span.marquee').textContent
        let found = false
        for (const pokemon of allClickedPokemons) {
            if (pokemon.name.toUpperCase() === pokemonName) {
                found = true
                break;
            }
        }
        if (found) {
            props.setGameover(true)
            props.setShowMainScreen(false)
            allClickedPokemons.length = 0
            allNonClickedPokemons.length = 0
            allIDs.length = 0
            return true
        }
        return false
    }
    function handleCardClicked(e) {
        const pokemonName = e.target.closest('.card').querySelector('span.marquee').textContent
        for (const pokemon of onScreenPokemons) {
            if (pokemon.name.toUpperCase() === pokemonName) {
                allClickedPokemons.push(pokemon)
                const index = allNonClickedPokemons.indexOf(pokemon);
                allNonClickedPokemons.splice(index, 1);
                break;
            }
        }
        props.setScore(score => score + 1)
        if (props.score >= props.bestScore) {props.setbestScore(bestScore => bestScore + 1)}
        displayPokemons()
    }

    return (
        <>  
            <div className="score">
                <p className="best-score">Best Score: {props.bestScore}</p>
                <p className="current-score">Current Score: {props.score}</p>
            </div>
            <div className="cards">
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
                <div className="card turn" onClick={(e) => {console.log(onScreenPokemons); !determinGameOver(e) ? (document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn')), setTimeout(() => handleCardClicked(e), 600)) : null ;}} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"><span><img src={pokeBallLogo} alt="" /></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen