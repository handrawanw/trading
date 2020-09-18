export function setChart({Data}){
  
  return {
    type: "setChart",
    Data,
  };
}

export function setDataJual({Data,last}){
  
  return {
    type: "setDataJual",
    Data,
    last,
  };
}

export function setDataBeli({Data,last}){
  
  return {
    type: "setDataBeli",
    Data,
    last
  };
}