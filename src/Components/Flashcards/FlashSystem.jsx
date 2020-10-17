import React, { useState } from "react";
import DeckPreview from "./DeckPreview.jsx";
import getData from "./deckGet";
import postData from "./deckPost";

function createPreview(deck) {
    return (
        <DeckPreview 
            key={deck.key}
            id={deck.key}
            name={deck.name}
            description={deck.description}
        />
    );
}

function FlashSystem() {
    const [decks, setDecks] = useState([]);

    window.addEventListener('load', function() {
        fetchDecks();
    });

    //setInterval(fetchDecks(), 1000);

    function fetchDecks() {
        getData().then(response => response.json().then(data => setDecks(data)));
    }

    //add case for long message!
    /*function addNewDeck() {        
        postData(msg).then(fetchMessages()).then({
            fetchMessages(){}
            //fetch, notify, dont clear
         });        
    }*/

    return (
        <div className="flashDiv">
            <dl>{decks.map(createPreview)}</dl>
        </div>
    );
}

export default FlashSystem;