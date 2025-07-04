import '../styles/mainScreen.css'
import {displayPokemons, onScreenPokemons} from '../helperFunctions/displayPokemons'
import { allClickedPokemons, allNonClickedPokemons } from '../api/getPokemons'

function MainScreen(props) {
    function handleCardClicked(e) {
        turnCards()
        const pokemonName = e.target.closest('.card').querySelector('span.marquee').textContent
        let found = false
        for (const pokemon of allClickedPokemons) {
            if (pokemon.name.toUpperCase() === pokemonName) {
                found = true
                break;
            }
        }
        if (!found) {
            for (const pokemon of onScreenPokemons) {
                if (pokemon.name.toUpperCase() === pokemonName) {
                    found = true
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
        else {
            props.setGameover(true)
            props.setShowMainScreen(false)
            console.log('game over')
        }
    }

    function turnCards() {
        document.querySelectorAll('.card').forEach(card => card.classList.add('turn'))
        setTimeout(() => {document.querySelectorAll('.card').forEach(card => card.classList.remove('turn')); console.log('turn removed')}, 1000)
    }

    return (
        <>  
            <div className="score">
                <p className="best-score">Best Score: {props.bestScore}</p>
                <p className="current-score">Current Score: {props.score}</p>
            </div>
            <div className="cards">
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
                <div className="card" onClick={(e) => handleCardClicked(e)} >
                    <div className="card-inner">
                        <div className="front">
                            <p><span className='marquee'></span></p>
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen