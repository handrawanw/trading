let initialState = {
    Grafik:[],
    LabelNew:[],
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
        Grafik:action.Data,
        LabelNew:action.LabelNew,
        DataBeli:action.DataBeli,
        lastBeli:action.lastBeli,
        DataJual:action.DataJual,
        lastJual:action.lastJual
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