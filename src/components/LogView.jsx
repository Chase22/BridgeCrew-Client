import React from 'react';
import {AppContext} from '../data/AppContext'


const LogViewer = () => {
    return <AppContext.Consumer>
        {({logMessages}) => {
            return (<div>{
                logMessages.map(message => {return <div>{message}</div>})
            }</div>)
        }}
    </AppContext.Consumer>
};

export default LogViewer