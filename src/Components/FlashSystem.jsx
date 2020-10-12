import React from "react";
import decks from "../decks";
import DeckPreview from "./DeckPreview.jsx";

function createPreview(deck) {
    return (
        <DeckPreview 
            key={deck.id}
            name={deck.name}
            content={deck.content}
        />
    );
}

function FlashSystem() {
    return (
        <div className="flashDiv">
            <p>//TODO Fetch info from database</p>
            <dl>{decks.map(createPreview)}</dl>
        </div>
    );
}

export default FlashSystem;