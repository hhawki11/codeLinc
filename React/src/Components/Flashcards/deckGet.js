async function getData() {
    return await fetch('http://localhost:8080/rest/decks/all');
}

export default getData;