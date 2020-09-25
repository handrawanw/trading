let initialState = {
    User:null,
    setForm:{
        beli:{
          tipe:"",
          jumlah:"",
          harga:""
        },
        jual:{
          tipe:"",
          jumlah:"",
          harga:""
        },
    },
    myOrderTrade:{
        market:[]
    }
};

export default function UserState(state=initialState,action){
  
  switch (action.type) {
    case "setInfoUser":
      return {
        ...state,
        User:action.User
      };
    
   case "setForm":
    return {
        ...state,
        setForm:{
          ...state.setForm,
          beli:{
            ...state.setForm.beli,
            tipe:action.tipe,
            jumlah:action.jumlah,
            harga:action.harga,
          },
          jual:{
            ...state.setForm.jual,
            tipe:action.tipe,
            jumlah:action.jumlah,
            harga:action.harga,
          }
        }
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

    case "OrderHistory":
    return {
        ...state,
        myOrderTrade:{
          ...state.myOrderTrade,
          market:action.market?action.market:[],
        }
    }; 

    default:
      return { ...state };
  }

}