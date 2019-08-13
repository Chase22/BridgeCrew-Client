import React from 'react';
import ViewPort from "../view/ViewPort";
import Ship from "../data/Ship";
import Websocket from "react-websocket";
import {AppContext} from "../data/AppContext"
import LogViewer from "./LogView";
import parseMessage from "../parser/Parser"

class Wrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            ship: new Ship(500, 250, 300, 100, 100),
            logMessages: []
        };

        this.addLogMessage = (message) => {
            this.setState(state => ({
                logMessages: [...state.logMessages, message]
            }));
        };

        this.handleData = this.handleData.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleData(data) {
        this.addLogMessage(parseMessage(data))
    }

    handleOpen() {
        this.addLogMessage("Connected")
    }

    handleClose() {
        this.addLogMessage("Disconnected")
    }

    sendMessage(message) {
        this.refWebSocket.sendMessage(message);
    }

    render() {
        return (
            <div className="wrapper">

                <AppContext.Provider value={this.state}>
                    <Websocket url='ws://localhost:8080/stream/game/gameid/test' onMessage={this.handleData}
                               onOpen={this.handleOpen} onClose={this.handleClose}
                               reconnect={true} debug={true}
                               ref={Websocket => {
                                   this.refWebSocket = Websocket;
                               }}/>
                    <ViewPort>
                        <LogViewer/>
                    </ViewPort>
                </AppContext.Provider>
            </div>
        );
    }
}

export default Wrapper