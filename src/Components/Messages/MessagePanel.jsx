import React, { useState } from "react";
import Message from "./Message";
import bigmsg from "../../bigmsg";

function createMsg(message) {
    const timestamp = message.timestamp.substring(11,16);
    const msgTime = parseInt(timestamp);    
    return (
        <Message 
            key={message.id}
            content={message.message}
            time={msgTime > 12 ? (msgTime-12 + ":" + timestamp.substring(3,5)): msgTime + ":" + timestamp.substring(3,5)}
            date={message.timestamp.substring(5,10) + "-" + message.timestamp.substring(0,4)}
            pic={message.id % 2 === 0 ? "https://th.bing.com/th/id/OIP._6ruYCE5906GevXSadC0DAAAAA?w=168&h=180&c=7&o=5&pid=1.7" : "https://th.bing.com/th/id/OIP.BfOYYULw5glO3zfyWldtyQAAAA?w=164&h=180&c=7&o=5&pid=1.7"}
        />
    );
}

function MessagePanel() {
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState([]);
    console.log(bigmsg);
    
    //pull from json

    

   

    function addNewMessage() {
        //var newKey = messages[0].id + 1;
        
        var today = new Date();
        var currentDate = today.toLocaleDateString().replaceAll("/", "-");
        currentDate =  currentDate.substring(6,10) + currentDate.substring(5,6) + currentDate.substring(0,5);
        var currentTime = today.toString().substring(16,24);
        var currentTimestamp = currentDate + "T" + currentTime + ".000+00:00";
        //var currentTime = today.getHours() + ":" + (today.getMinutes() > 10 ? today.getMinutes() : "0" + today.getMinutes());
        const newMessage = {id: 10, message: msg, timestamp: currentTimestamp};

        //update the json file
        setMessages(messages => [newMessage, ...messages]);
    }

    function setsMsg(event) {
        setMsg(event.target.value);
    }

    return (
        <div className="bigDiv">
            <input 
                onChange={setsMsg}
                type="text"
                placeholder="Message"
                className="writeMessage"
            />
            <button onClick={addNewMessage} className="sendMessage">Send</button>
            <dl>{messages.map(createMsg)}</dl>
        </div>
    );
}

export default MessagePanel;