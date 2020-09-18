let initialState = {
    Grafik:[]
};

export default function HistoryStore(state=initialState,action){
  
  switch (action.type) {
    case "setChart":
      return {
        ...state,
        Grafik:action.Data
      };
    
    default:
      return { ...state };
  }

}