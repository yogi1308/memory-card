import {displayThesePokemons} from './getPokemonsToDisplay'
export {displayPokemons, onScreenPokemons}

let onScreenPokemons = []

async function displayPokemons() {
    const pokemonsToDisplay = await displayThesePokemons()
    let index = 0
    document.querySelectorAll('.front').forEach(card => {
        card.style.backgroundImage = `url(${pokemonsToDisplay.at(index).img})`
        card.querySelector('.marquee').textContent = `${pokemonsToDisplay.at(index).name.toUpperCase()}`
        ++index
    })
    document.querySelectorAll('.front p').forEach(p => {
        const span = p.querySelector('.marquee');
        if (span.scrollWidth > p.clientWidth) {
            span.classList.add('scrolling');
        } else {
            span.classList.remove('scrolling');
        }
    });
    onScreenPokemons = [...pokemonsToDisplay]
}