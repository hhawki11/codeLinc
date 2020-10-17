import React from "react";


function Card(props) {

    //spaced repition
    
    return (
        <div className="term">
            <dt>
                <span>{props.term}</span>
            </dt>
            <dd>{props.definition}</dd>
        </div>
    );
}

export default Card;