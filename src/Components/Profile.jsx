import React from "react";
import FlashSystem from "./Flashcards/FlashSystem";
import MessagePanel from "./Messages/MessagePanel.jsx"
import Content from "./Main/Content"

function Profile() {
    return(
        <div className="container">
            <div className="mainDiv">            
                <FlashSystem />
                <Content />
                <MessagePanel />
            </div>
        </div>
    );
}

export default Profile;