async function postData(data) {
    return await fetch('http://localhost:8080/rest/messages/add', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        //headers: {
        //    'Content-Type': 'application/json'
        //},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: data
    });
}

export default postData;