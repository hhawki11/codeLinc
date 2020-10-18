async function getData() {
    return await fetch('http://localhost:8080/rest/messages/allOrdered');
}

export default getData;