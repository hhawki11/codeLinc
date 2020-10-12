import React, { useState } from "react";



function Nav(props) {

    //const [active, setActive] = useState("inactive");

    /*function clicked() {
        setActive("active");
    }
*/
    return ((props.pic != null) ? <img src={props.pic}></img> : <li class="navheader"><a href={props.link}><br></br>{props.name}</a></li>);
}

export default Nav;