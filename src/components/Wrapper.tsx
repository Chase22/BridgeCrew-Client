import React from 'react';
import ViewPort from "../view/ViewPort";
import Ship from "../data/Ship";
import AppContext from "../data/AppContext"
import {AppContextType} from "../data/AppContext"
import LogViewer from "./LogView";
import parseMessage from "../logic/Parser"
import SolarPanelView from "../view/SolarPanelView";
import Subsystem from "../data/Subsystem";

class Wrapper extends React.Component<{}, AppContextType> {

    constructor(props: any) {
        super(props);

        const ws = new WebSocket("ws://localhost:8080/stream/game/gameid/react-test");

        this.handleData = this.handleData.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addLogMessage = this.addLogMessage.bind(this);

        ws.onmessage = this.handleData;
        ws.onopen = this.handleOpen;
        ws.onclose = this.handleClose;

        this.state = {
            ship: new Ship(500, 250, 300, 100, 100, [new Subsystem("solarPanel", "SolarPanel", "")]),
            logMessages: [],
            addLogMessage: this.addLogMessage
        };
    }

    addLogMessage(message: string) {
        this.setState(state => ({
            logMessages: [...state.logMessages, message]
        }));
    }

    handleData(messageEvent: MessageEvent) {
        this.addLogMessage(parseMessage(messageEvent.data))
    }

    handleOpen() {
        this.addLogMessage("Connected")
    }

    handleClose() {
        this.addLogMessage("Disconnected")
    }

    render() {
        return (
            <div className="wrapper">

                <AppContext.Provider value={this.state}>
                    <ViewPort>
                        <LogViewer/>
                        <SolarPanelView/>
                    </ViewPort>
                </AppContext.Provider>
            </div>
        );
    }
}

export default Wrapper