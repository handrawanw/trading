let initialState = {
    User:null,
    setFormHarga:{
      tipe:null,
      jumlah:0,
      harga:0
    }
};

export default function UserState(state=initialState,action){
  
  switch (action.type) {
    case "setInfoUser":
      return {
        ...state,
        User:action.User
      };
    
    case "setFormUser":
    return {
        ...state,
        setFormHarga:{
          ...state.setFormHarga,
          tipe:action.tipe,
          jumlah:action.jumlah,
          harga:action.harga,
        }
    };
    default:
      return { ...state };
  }

}