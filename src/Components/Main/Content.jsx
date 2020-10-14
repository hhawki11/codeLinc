import React from "react";
import Review from "./Review";
import Resources from "./Resources";

function Content() {
    return(
        <div className="resourcesDiv">
            <Review />
            <Resources />
        </div>
    );
}

export default Content;