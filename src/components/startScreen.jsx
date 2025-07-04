import '../styles/startScreen.css'
import {displayPokemons} from '../helperFunctions/displayPokemons'
function StartScreen(props) {
    return (
        <>
            <div className="logo"></div>
            <h2 className='start' onClick={() => {props.setShowStartScreen(false); props.setShowMainScreen(true); displayPokemons(); props.setScore(0)}} >Press To Start</h2>
        </>
    )
}

export default StartScreen