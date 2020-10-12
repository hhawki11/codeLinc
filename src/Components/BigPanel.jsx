import React from "react";
import Message from "./Message";
import bigmsg from "../bigmsg";

function createMsg(message) {
    return (
        <Message 
            key={message.id}
            name={message.name}
            content={message.content}
            time={message.time}
            date={message.date}
            pic={message.pic}
        />
    );
}

function BigPanel() {
    return (
        <div className="bigDiv">
            <dl>{bigmsg.map(createMsg)}</dl>
        </div>
    );
}

export default BigPanel;