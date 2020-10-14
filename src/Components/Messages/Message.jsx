import React from "react";

function Message(props) {
    return (
        <div className="message">
            <div className="msgHeader">
                <img src={props.pic} alt="Profile" height="50" className="msgPic"></img>
                <h2 className="msgHeader1">{props.content}</h2>
            </div>
            <h3 className="msgFooter">-{props.time}, {props.date}</h3>
        </div>
    );
}

export default Message;