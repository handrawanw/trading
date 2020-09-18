export function SetTradeJualAll({market}) {
  
  return {
    type:"TradeJual",
    market,
  }
}

export function SetTradeBeliAll({market}) {
  
  return {
    type:"TradeBeli",
    market,
  }
}

export function SetTradeAll({market}) {
  
  return {
    type:"TradeAll",
    market,
  }
}