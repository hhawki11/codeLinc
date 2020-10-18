import React, { useState } from "react";
import DeckPreview from "./DeckPreview.jsx";
import getData from "./deckGet";
import getCardData from "./cardsGet"
import postData from "./deckPost";
import Card from "./Card";




function doNothing(test) {
    console.log("clicked");
}



function FlashSystem() {
    const [decks, setDecks] = useState([]);
    
    const [curr, setCurr] = useState();

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

    window.addEventListener('load', function() {
        fetchDecks();
    });

    function fetchDecks() {
        getData().then(response => response.json().then(data => setDecks(data)));
    }

   


    return (
        <div>
        <div className="flashDiv">
            <dl>{decks.map(createPreview)}</dl>
        </div>
        
        </div>
    );
}

export default FlashSystem;