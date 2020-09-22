const MAX_DATA=10;
let initialState = {
    Grafik:[],
    LabelNew:[],
    DataBeli:[],
    DataJual:[],
    lastJual:0,
    lastBeli:0,
    highPrice:0,
    lowPrice:0,
    lastPriceAll:0,
};

export default function HistoryStore(state=initialState,action){
  
  switch (action.type) {
    case "setChart":
      let sorts=action.Data.sort((a,b)=>b.latestHarga-a.latestHarga);

      return {
        ...state,
        Grafik:action.Data,
        LabelNew:typeof action.LabelNew==="object"?action.LabelNew.reverse().filter((item,index)=>index<=MAX_DATA?item:null):[],
        DataBeli:typeof action.DataBeli==="object"?action.DataBeli.reverse().filter((item,index)=>index<=MAX_DATA?item:null):[],
        lastBeli:action.lastBeli,
        DataJual:typeof action.DataJual==="object"?action.DataJual.reverse().filter((item,index)=>index<=MAX_DATA?item:null):[],
        lastJual:action.lastJual,
        highPrice:action.Data?sorts[0].latestHarga:0,
        lowPrice:action.Data?sorts[sorts.length-1].latestHarga:0,
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