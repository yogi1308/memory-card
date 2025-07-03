import '../styles/help.css'
function Help() {
    return (
        <>
            <div className="help">
                <h3
                    onMouseEnter={(e) => {e.target.closest('.help').querySelector('p').classList.toggle('show')}}
                    onMouseLeave={(e) => {e.target.closest('.help').querySelector('p').classList.toggle('show')}}
                >?</h3>
                <p>Don't Click on any of the Cards Twice</p>
            </div>
        </>
    )
}

export default Help