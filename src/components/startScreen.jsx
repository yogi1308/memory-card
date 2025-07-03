import '../styles/startScreen.css'
function StartScreen(props) {
    return (
        <>
            <div className="logo"></div>
            <h2 className='start' onClick={() => {props.setShowStartScreen(false); props.setShowMainScreen(true)}} >Press To Start</h2>
        </>
    )
}

export default StartScreen