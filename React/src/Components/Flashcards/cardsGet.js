async function getCardData(deckID) {
    return await fetch('http://localhost:8080/rest/cards/cardsFromDeck?id_deck=' + deckID);
}

export default getCardData;