import React from "react";
import Ship from "./Ship";

export type AppContextType = {
    logMessages: string[];
    addLogMessage(message: String): void;
    ship: Ship;
}

export default React.createContext<AppContextType>({
    logMessages: [],
    addLogMessage: () => { throw new Error("Not yet implemented")},
    ship: new Ship(0, 0, 0, 0, 0, [])
});