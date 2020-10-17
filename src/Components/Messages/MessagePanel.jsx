import React, { useState } from "react";
import Message from "./Message";
import getData from "./messageGet";
import postData from "./messagePost";

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
    
    window.addEventListener('load', function() {
        fetchMessages();
    });
    window.addEventListener('click', function() {
        fetchMessages();
    });

    //console.log(setInterval(fetchMessages(), 1000));

    function fetchMessages() {
        getData().then(response => response.json().then(data => setMessages(data)));
    }

    //add case for long message!
    function addNewMessage() {       
        postData(msg).then(fetchMessages()).then({
            fetchMessages(){}
            //fetch, notify, dont clear
         });    
           
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