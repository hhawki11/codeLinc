import React from "react";
import Nav from "./Nav";



function Header() {
    return (
        <div>
            <div className="fixedHeader">
                <div className="head">
                    <h1 className="infoHeading">
                        For updates on our response to the coronavirus crisis click here
                    </h1>
                </div>
                <nav className="navWrapper">
                    <ul className="nav">
                        <Nav link="www.bbbs.org" pic="https://www.bbbs.org/wp-content/uploads/BBBSA-Logo-170x82.png" className="img"/>
                        <div className="navDiv">
                            <Nav link="index.html" name="Get Involved"/>
                        </div>
                        <Nav link="cards.html" name="Enroll a Child"/>
                        <Nav link="help.html" name="Programs"/>
                        <Nav link="index.html" name="Partners"/>
                        <Nav link="cards.html" name="About Us"/>
                        <Nav link="help.html" name="Contact Us"/>
                    </ul>
                </nav>
                
            </div>
            <div className="navPlaceholder">
            </div>
        </div>
    );
}

export default Header;