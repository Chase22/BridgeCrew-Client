import React from "react";
import "./View.scss"

function view(props) {
    return <div className="view">
        {props.children}
    </div>
}

export default view;