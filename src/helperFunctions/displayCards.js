import {getPokemons, allClickedPokemons, allNonClickedPokemons} from '../api/getPokemons.js'

export {displayThesePokemons}

let displayThesePokemonsArray = []

async function displayThesePokemons() {
    if (allClickedPokemons.length === 0) {
        displayThesePokemonsArray.push(...allNonClickedPokemons)
        return displayThesePokemonsArray
    }
    if (allClickedPokemons.length < 3) {
        displayThesePokemonsArray = shuffle([...allNonClickedPokemons, ...allClickedPokemons], 7, 7)
        return displayThesePokemonsArray
    }

    if (allNonClickedPokemons.length < 2) {await getPokemons()}
    const numNonClicked = Math.floor(Math.random() * 4) + 2;
    let displayTheseNonClicked = shuffle(allNonClickedPokemons, numNonClicked, allNonClickedPokemons.length)
    let displayTheseClicked = shuffle(allClickedPokemons, 7 - numNonClicked, allClickedPokemons.length)
    displayThesePokemonsArray = shuffle([...displayTheseClicked, ...displayTheseNonClicked], 7, 7)
    return displayThesePokemonsArray
}

function shuffle(deck, forNum, randomNum) {
    let shuffledIndices = []
    let shuffledDeck = []
    for (let i = 0; i < forNum; ++i) {
        while ( true) {
            const index = Math.floor(Math.random() * randomNum);
            if (!shuffledIndices.includes(index)) {
                shuffledIndices.push(index)
                break
            }
        }
    }
    shuffledIndices.forEach(index => {
        shuffledDeck.push(deck.at(index))
    })
    return shuffledDeck
}