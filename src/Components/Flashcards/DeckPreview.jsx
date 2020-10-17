import React, { useState } from "react";
import  { displayDeck } from "../Main/Review"
import Card from "./Card";
import getCardData from "./cardsGet";
import postData from "./cardPost";

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
    const [term, setTerm] = useState("");
    const [def, setDef] = useState("");

    function loadDeck() {
        getCardData(props.id).then(response => response.json().then(data => setCards(data)));
    }

    function setsTerm(event) {
        setTerm(event.target.value);
    }
    function setsDef(event) {
        setDef(event.target.value);
    }

    function addNewCard() {
        postData({
            "term" : term,
            "definition" : def,
            "deckId" : props.id
        }).then(response => response.json()).then(data => setCards(data));  
    }

    return(
        <div className="cards">
            <div>
                <button onClick={loadDeck}>Trivia!</button>
                <h2 className="previewHeader" >{props.name}</h2>
            </div>
            <h3 className="previewFooter">{props.description}</h3>
            <input 
                onChange={setsTerm}
                type="text"
                placeholder="Term"
                className="writeMessage"
            />
            <input 
                onChange={setsDef}
                type="text"
                placeholder="Definition"
                className="writeMessage"
            />
            <button onClick={addNewCard} className="sendMessage">Add</button>
            <dl>{cards.map(loadCards)}</dl>
        </div>
    );
}

export default DeckPreview;