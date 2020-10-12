import React from "react";

function DeckPreview(props) {
    return(
        <div className="deckPreview">
        <div>
            <button className="flashButton">Trivia!</button>
            <h2 className="previewHeader">{props.name}</h2>
        </div>
            <h3 className="previewFooter">{props.content}</h3>
        </div>
    );
}

export default DeckPreview;