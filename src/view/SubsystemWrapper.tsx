import AppContext from "../data/AppContext";
import * as React from "react";
import {Component, ReactNode} from "react";

abstract class SubsystemWrapper extends Component{

    abstract getContent(): ReactNode;
    abstract getSubsystemId(): String;

    render(): ReactNode {
        return <AppContext.Consumer>
            {({ship}) => {
                return (<div className="subsystem-wrapper">
                    {ship.getSubSystemIds().includes(this.getSubsystemId()) ? this.getContent() : SubsystemWrapper.getError()}
                </div>)
            }}
        </AppContext.Consumer>
    }

    private static getError(): ReactNode {
        return <div className="subsystem-wrapper_error">
            Subsystem not installed
        </div>;
    }
}

export default SubsystemWrapper;