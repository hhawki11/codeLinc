import React from "react";

function Nav(props) {
    return ((props.pic != null) ? <img src={props.pic} alt="BBBS Logo"></img> : <li className="navheader"><a href={props.link}><br></br>{props.name}</a></li>);
}

export default Nav;