import axios from "axios";
import Toast from "cogo-toast";

export function RefundSend({DataRefund}) {
  axios({
    url: `${process.env.REACT_APP_URL_LOCALHOST}/tradePay`,
    method: "POST",
    headers: {
      jwttoken:localStorage.getItem("token")
    },
    data: {
      idMd5:DataRefund
    }
  }).then(({ data }) => {
    Toast.success(data.message);
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