import { wait } from "@testing-library/react";

    var bigmsg;
    /*fetch ("http://localhost:8080/rest/messages/all")
        .then(
            response => console.log(response.json().)
        );*/
    bigmsg = fetch('http://localhost:8080/rest/messages/all')
        .then(response => response.json())
        .then(data => console.log(data));
        
    console.log("bigmsg is" + bigmsg.data);

const bdadwadigmsg = [
    {
        id: 4,
        message: "Hello Test",
        timestamp: "2020-10-13T12:04:28.000+00:00"
    },
    {
        id: 3,
        message: "First message!",
        timestamp: "2020-10-11T12:51:25.000+00:00"
    },
    {
        id: 2,
        message: "I'm testing the program now!",
        timestamp: "2020-10-10T12:47:25.000+00:00"
    },
    {
        id: 1,
        message: "Added as friend!",
        timestamp: "2020-10-10T12:34:25.000+00:00"
    }
];

export default bigmsg;