import React from "react";
import  { displayDeck } from "../Main/Review"


function DeckPreview(props) {

    function sendID() {
        displayDeck(props.id);
    }

    return(
        <div className="deckPreview">
            <div>
                <button className="flashButton" onClick={sendID}>Trivia!</button>
                <h2 className="previewHeader" >{props.name}</h2>
            </div>
            <h3 className="previewFooter">{props.description}</h3>
        </div>
    );
}

export default DeckPreview;