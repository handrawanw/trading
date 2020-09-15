import axios from "axios";
import Toast from "cogo-toast";

import Auth from "../Auth";

export default function LoginSend({ DataLogin,history }) {
  axios({
    url: `${process.env.REACT_APP_URL_LOCALHOST}/user/login`,
    method: "POST",
    headers: {
      jwttoken:localStorage.getItem("token")
    },
    data: {
      ...DataLogin
    }
  }).then(({ data }) => {
    Auth.onLogin(() => {
      Toast.success(data.message);
      localStorage.setItem("token", data.token);
      history.push("/dashboard");
    })
  }).catch((err) => {
    let msg = "";
    if (err.response === undefined) {
      msg = err.message;
    } else {
      msg = err.response.data.message;
    }
    Toast.error(msg);
  })
}

export function LogoutSend({ DataLogin,history }) {
  axios({
    url: `${process.env.REACT_APP_URL_LOCALHOST}/user/logout`,
    method: "DELETE",
    headers: {
      jwttoken:localStorage.getItem("token")
    }
  }).then(({ data }) => {
    Auth.onLogout(() => {
      Toast.success(data.message);
      localStorage.clear();
      history.push("/");
    })
  }).catch((err) => {
    let msg = "";
    if (err.response === undefined) {
      msg = err.message;
    } else {
      msg = err.response.data.message;
    }
    Toast.error(msg);
  })
}