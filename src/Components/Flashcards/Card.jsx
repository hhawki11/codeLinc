import React from "react";


function Card(props) {

    //spaced repition
    
    return (
        <div className="card">
            <div className ="cardTerm">{props.term}</div>
            <div className = "cardDef">{props.definition}</div>
        </div>
    );
}

export default Card;