import React from 'react';
import ShipView from "../view/ShipView";
import View from "../view/View";
import ViewPort from "../view/ViewPort";
import Ship from "../data/Ship";

class Wrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            ship: new Ship(500, 250, 300, 100, 100),
        };

        this.handleData = this.handleData.bind(this)
    }

    handleData(data) {
        this.setState({
            ship: JSON.parse(data)
        })
    }

    handleOpen() {
        console.log("connected:)");
    }

    handleClose() {
        console.log("disconnected:(");
    }

    sendMessage(message) {
        this.refWebSocket.sendMessage(message);
    }

    render() {
        return (
            <div className="wrapper">
                {/*<Websocket url='ws://localhost:8080/stream/ship' onMessage={this.handleData}*/}
                {/*onOpen={this.handleOpen} onClose={this.handleClose}*/}
                {/*reconnect={true} debug={true}*/}
                {/*ref={Websocket => {*/}
                {/*this.refWebSocket = Websocket;*/}
                {/*}}/>*/}
                <ViewPort>
                    <View>
                        <ShipView ship={this.state.ship ? this.state.ship : {temperature: 0, maxTemperature: 0}}/>
                    </View>
                </ViewPort>
            </div>
        );
    }
}

export default Wrapper