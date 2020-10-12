import React from "react";
import FlashSystem from "./FlashSystem";
import BigPanel from "./BigPanel.jsx"
import Resources from "./Resources"

function Profile() {
    return(
        <div className="container">
            <div className="mainDiv">            
                <FlashSystem />
                <Resources />
                <BigPanel />
            </div>
        </div>
    );
}

export default Profile;