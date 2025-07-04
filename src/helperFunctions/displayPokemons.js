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

    const urls = pokemonsToDisplay.map(pokemon => pokemon.img)
    const preloadPromises = urls.map(src =>
    new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        if (img.decode) {
        img.decode().then(resolve).catch(reject)
        } else {
        img.onload  = resolve
        img.onerror = () => reject(new Error(`Failed to load ${src}`))
        }
    })
    )
    const start = performance.now()
    await Promise.all(preloadPromises)
    const elapsed = performance.now() - start
    if (elapsed < 750) {
    await new Promise(res => setTimeout(res, 750 - elapsed))
    }

    document.querySelectorAll('.front p').forEach(p => {
        const span = p.querySelector('.marquee');
        if (span.scrollWidth > p.clientWidth) {
            span.classList.add('scrolling');
        } else {
            span.classList.remove('scrolling');
        }
    });
    onScreenPokemons = [...pokemonsToDisplay]
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('turn'))
}