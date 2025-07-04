import {getPokemons, allClickedPokemons, allNonClickedPokemons} from '../api/getPokemons.js'

export {displayThesePokemons}

let displayThesePokemonsArray = []

async function displayThesePokemons() {
    if (allClickedPokemons.length === 0) {
        await getPokemons()
        displayThesePokemonsArray.push(...allNonClickedPokemons)
        return displayThesePokemonsArray
    }
    if (allClickedPokemons.length <= 3) {
        displayThesePokemonsArray = shuffle([...allNonClickedPokemons, ...allClickedPokemons], 7, 7)
        return displayThesePokemonsArray
    }

    if (allClickedPokemons.length <= 5) {
        await getPokemons()
        displayThesePokemonsArray = shuffle([...allNonClickedPokemons, ...allClickedPokemons], 7, 7)
        return displayThesePokemonsArray
    }
    
    if (allNonClickedPokemons.length < 2) {await getPokemons()}
    const numClicked = Math.floor(Math.random() * 3) + 4;
    let displayTheseNonClicked = shuffle(allNonClickedPokemons, 7 - numClicked, allNonClickedPokemons.length)
    let displayTheseClicked = shuffle(allClickedPokemons, numClicked, allClickedPokemons.length)
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