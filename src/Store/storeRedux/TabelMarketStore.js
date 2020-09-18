let initialState = {
  TradeJual: {
    market:[]
  },
  TradeBeli: {
    market:[]
  },
  TradeMe:{
    market:[]
  }
};

export function TradeState(state=initialState,action){
  
  switch (action.type) {
    case "TradeJual":
      
      return {
        ...state,
        TradeJual: {
          ...state.TradeJual,
          market:action.market
        }
      };
    case "TradeBeli":
      
        return {
          ...state,
          TradeBeli: {
            ...state.TradeBeli,
            market:action.market
          }
        };
    case "TradeAll":
      
      return {
        ...state,
          TradeMe: {
            ...state.TradeMe,
            market:action.market
          }
        };
    default:
      return { ...state };
  }

}