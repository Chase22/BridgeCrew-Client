const parseText = (message) => {
    const time = new Date(message.timestamp.slice(0, -5)).toLocaleString();
    const from = message.payload.from;
    const text = message.payload.message;

    return `${time} - ${from}: ${text}`
};

const parseShip = (message) => {
    return "Ship"
};

const parseDefault = (message) => {return message};

const parser = {
    "text": parseText,
    "ship": parseShip,
    default: parseDefault
};

const parseMessage = (message) => {
    const data = JSON.parse(message);
    console.log(data);
    return parser[data.messageType.toLowerCase()](data)
};

export default parseMessage;