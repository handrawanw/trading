import Toast from "cogo-toast";

export function setInfoUser({User}){
  
  return {
    type: "setInfoUser",
    User,
  };
}

export function orderHistory({market}){
  return {
    type: "OrderHistory",
    market,
  };
}

export function setForm({tipe,jumlah,harga,status}){
  if(status){
    if(status==="CLICK"){
      Toast.success("Item harga berhasil dipindahkan ke form");
    }
  }
  return {
    type: "setForm",
    tipe,
    jumlah,
    harga
  };
}

export function setFormJual({tipe,jumlah,harga,status}){
  if(status){
    if(status==="CLICK"){
      Toast.success("Item harga berhasil dipindahkan ke form");
    }
  }
  return {
    type: "setFormJual",
    tipe,
    jumlah,
    harga
  };
}

export function setFormBeli({tipe,jumlah,harga,status}){
  if(status){
    if(status==="CLICK"){
      Toast.success("Item harga berhasil dipindahkan ke form");
    }
  }
  return {
    type: "setFormBeli",
    tipe,
    jumlah,
    harga
  };
}

