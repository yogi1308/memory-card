import '../styles/mainScreen.css'
function MainScreen() {
    return (
        <>  
            <div className="score">
                <p className="best-score">Best Score: 8</p>
                <p className="current-score">Current Score: 5</p>
            </div>
            <div className="cards">
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
                <div className="card"><p><span className='marquee'></span></p></div>
            </div>
        </>
    )
}

export default MainScreen