import axios from "axios";
import Toast from "cogo-toast";

export default function DaftarSend({ DataDaftar,history }) {
  axios({
    url: `${process.env.REACT_APP_URL_LOCALHOST}/user`,
    method: "POST",
    headers: {
      jwttoken:localStorage.getItem("token")
    },
    data: {
      ...DataDaftar
    }
  }).then(({ data }) => {
    Toast.success(data.message);
    history.push("/trading");
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
