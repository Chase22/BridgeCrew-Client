import React from "react";
import "./ViewPort.scss"

function viewPort(props) {
    return <div className="viewPort">
        {props.children}
    </div>
}

export default viewPort;