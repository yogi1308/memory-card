import {displayThesePokemons} from './getPokemonsToDisplay'
export {displayPokemons}

async function displayPokemons() {
    const pokemonsToDisplay = await displayThesePokemons()
    let index = 0
    document.querySelectorAll('.card').forEach(card => {
        card.style.backgroundImage = `url(${pokemonsToDisplay.at(index).img})`
        card.querySelector('.marquee').textContent = `${pokemonsToDisplay.at(index).name.toUpperCase()}`
        ++index
    })
    document.querySelectorAll('.card p').forEach(p => {
        const span = p.querySelector('.marquee');
        if (span.scrollWidth > p.clientWidth) {
            span.classList.add('scrolling');
        } else {
            span.classList.remove('scrolling');
        }
        console.log(span.scrollWidth)
        console.log(p.clientWidth)
    });
}