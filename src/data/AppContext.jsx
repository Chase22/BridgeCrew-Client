import React from "react";

export const AppContext = React.createContext({
    logMessages: [],
    addLogMessage: () => {}
});