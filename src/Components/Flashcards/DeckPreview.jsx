import React, { useState } from "react";
import  { displayDeck } from "../Main/Review"
import Card from "./Card";
import getCardData from "./cardsGet";

function loadCards(card) {
    return (
        <Card 
            key={card.id}
            id={card.id}
            term={card.term}
            definition={card.definition}
            deckID={card.deck_idDeck}
            step={card.step}
            dueDate={card.Due_date}
        />
    );
}


function DeckPreview(props) {
    const [cards, setCards] = useState([]);

    function loadDeck() {
        getCardData(props.id).then(response => response.json().then(data => setCards(data)));
    }

    return(
        <div className="resourcesFull">
            <div>
                <button onClick={loadDeck}></button>
                <h2 className="previewHeader" >{props.name}</h2>
            </div>
            <h3 className="previewFooter">{props.description}</h3>
            <dl>{cards.map(loadCards)}</dl>
        </div>
    );
}

export default DeckPreview;