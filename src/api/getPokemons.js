import pokeball from '../assets/poke-ball.png'

let allPokemons = []
let allClickedPokemons = []
let allNonClickedPokemons = []
const allIDs = []

export {getPokemons, allClickedPokemons, allNonClickedPokemons}

async function getPokemons() {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
    let idList = getIDs()
    for (const id of idList) {
        const url = `${baseURL}${id}/`
        let pokemon = await fetch(url, { mode: 'cors' })
        pokemon = await pokemon.json()
        const pokemonName = pokemon.name
        let pokemonImg = pokemon.sprites.other.showdown.front_default
        if (pokemonImg === null) {
            pokemonImg = pokemon.sprites.front_default || pokeball
        }
        pokemon = {name: pokemonName, img: pokemonImg, clicked: false, id: id}
        allPokemons.push(pokemon)
        allNonClickedPokemons.push(pokemon)
    }
}

function getIDs() {
    let fetchTheseIDs = []
    let id;
    for (let i = 0; i < 7; ++i) {
        if (allIDs.length >= 1025) {break}
        if (weightedRandom() === 0) {
            while (true) {
                id = Math.floor(Math.random() * 1025) + 1;
                if (!allIDs.includes(id)) {
                    break
                }
            }
        }
        else {
            while (true) {
                id = Math.floor(Math.random() * (10277 - 10001 + 1)) + 10001;
                if (!allIDs.includes(id)) {
                    break
                }
            }
        }
        fetchTheseIDs.push(id)
    }
    return fetchTheseIDs
}

function weightedRandom() {
  return Math.floor(Math.random() * 6) === 5 ? 1 : 0;
}