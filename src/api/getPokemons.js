let allPokemons = []
let allClickedPokemons = []
let allNonClickedPokemons = []
const allIDs = []

export {getPokemons}

async function getPokemons() {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
    let idList = getIDs()
    console.log(idList)
    for (const id of idList) {
        const url = `${baseURL}${id}/`
        let pokemon = await fetch(url, { mode: 'cors' })
        pokemon = await pokemon.json()
        const pokemonName = await pokemon.name
        let pokemonImg = await pokemon.sprites.other.showdown.front_default
        if (pokemonImg === null) {
            pokemonImg = await pokemon.sprites.front_default
        }
        pokemon = {name: pokemonName, img: pokemonImg, clicked: false, id: id}
        allPokemons.push(pokemon)
        allNonClickedPokemons.push(pokemon)
    }
    console.log(allPokemons)
}

function getIDs() {
    let fetchTheseIDs = []
    let id;
    for (let i = 0; i < 7; ++i) {
        let insideAllIDs = true
        if (weightedRandom() === 0) {
            while (insideAllIDs) {
                id = Math.floor(Math.random() * 1025) + 1;
                if (!allIDs.includes(id)) {
                    insideAllIDs = false
                }
            }
        }
        else {
            while (insideAllIDs) {
                id = Math.floor(Math.random() * (10277 - 10001 + 1)) + 10001;
                if (!allIDs.includes(id)) {
                    insideAllIDs = false
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