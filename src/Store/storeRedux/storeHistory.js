let initialState = {
    Grafik:[],
    DataBeli:[],
    DataJual:[],
    lastJual:0,
    lastBeli:0,
};

export default function HistoryStore(state=initialState,action){
  
  switch (action.type) {
    case "setChart":
      return {
        ...state,
        Grafik:action.Data
      };
    case "setDataJual":
        return {
          ...state,
          DataBeli:action.Data,
          lastBeli:action.last
      };

    case "setDataBeli":
        return {
          ...state,
          DataJual:action.Data,
          lastJual:action.last
      };
    
    default:
      return { ...state };
  }

}