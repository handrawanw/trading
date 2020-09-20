let initialState = {
    User:null,
    setForm:{
      jual:{
        tipe:null,
        jumlah:null,
        harga:null
      },
      beli:{
        tipe:null,
        jumlah:null,
        harga:null
      }
    }
};

export default function UserState(state=initialState,action){
  
  switch (action.type) {
    case "setInfoUser":
      return {
        ...state,
        User:action.User
      };
    
    case "setFormJual":
    return {
        ...state,
        setForm:{
          ...state.setForm,
          jual:{
            ...state.setForm.jual,
            tipe:action.tipe,
            jumlah:action.jumlah,
            harga:action.harga,
          }
        }
    };

    case "setFormBeli":
    return {
      ...state,
      setForm:{
        ...state.setForm,
        beli:{
          ...state.setForm.beli,
          tipe:action.tipe,
          jumlah:action.jumlah,
          harga:action.harga,
        }
      }
    };
    default:
      return { ...state };
  }

}