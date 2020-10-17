import React, { useState } from "react";
import Card from "./Card";
import getData from "./cardGet";
import postData from "./cardPost";

function createCards(card) {
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

function Cards(props) {
    const [deck, setDeck] = useState([]);

    //function fetchDeck() {
        getData(props.id).then(response => response.json().then(data => setDeck(data)));
    //}

    return (
        <div>
            <dl className="dictionary">{deck.map(createCards)}</dl>
        </div>
    );
}

export default Cards;