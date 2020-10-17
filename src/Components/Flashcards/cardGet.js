async function getData(deckID) {
    return await fetch('http://localhost:8080/rest/cards/cardsFromDeck?id_deck=' + deckID);
}

export default getData;