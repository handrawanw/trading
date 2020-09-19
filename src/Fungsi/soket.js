import io from "socket.io-client";
import jwt from "jwt-decode";

export let SocketIO = io(process.env.REACT_APP_URL_LOCALHOST);

export let uuid=localStorage.getItem("token")?jwt(localStorage.getItem("token")):null;