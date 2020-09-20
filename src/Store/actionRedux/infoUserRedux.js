import Toast from "cogo-toast";

export function setInfoUser({User}){
  
  return {
    type: "setInfoUser",
    User,
  };
}

export function setFormJual({tipe,jumlah,harga}){
  Toast.success("Item Jual harga berhasil dipindahkan ke form");
  return {
    type: "setFormJual",
    tipe,
    jumlah,
    harga
  };
}

export function setFormBeli({tipe,jumlah,harga}){
  Toast.success("Item Beli harga berhasil dipindahkan ke form");
  return {
    type: "setFormBeli",
    tipe,
    jumlah,
    harga
  };
}