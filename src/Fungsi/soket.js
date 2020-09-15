import io from "socket.io-client";

export let SocketIO = io(process.env.REACT_APP_URL_LOCALHOST);