export function setInfoUser({User}){
  
  return {
    type: "setInfoUser",
    User,
  };
}

export function setFormHarga({tipe,jumlah,harga}){
  
  return {
    type: "setInfoUser",
    tipe,
    jumlah,
    harga
  };
}