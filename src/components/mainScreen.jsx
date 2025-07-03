import '../styles/mainScreen.css'
import {displayPokemons, onScreenPokemons} from '../helperFunctions/displayPokemons'
import { allClickedPokemons, allNonClickedPokemons } from '../api/getPokemons'
import { useState } from 'react'

function MainScreen(props) {
    const [score, setScore] = useState(0)
    function handleCardClicked(e) {
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
            setScore(score => score + 1)
            displayPokemons()
        }
        else {
            props.setGameover(true)
            props.setShowMainScreen(false)
            console.log('game over')
        }
    }

    return (
        <>  
            <div className="score">
                <p className="best-score">Best Score: 8</p>
                <p className="current-score">Current Score: {score}</p>
            </div>
            <div className="cards">
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
                <div className="card" onClick={(e) => handleCardClicked(e)} ><p><span className='marquee'></span></p></div>
            </div>
        </>
    )
}

export default MainScreen