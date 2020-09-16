import React from "react";

import { Provider } from "react-redux";

import { combineReducers, createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { reduxSoldierMiddleware } from "redux-soldier";

import { TradeState } from "../Store/storeRedux/TabelMarketStore";
import UserState from "../Store/storeRedux/infoUserStore";

export default function ReduxState({ children }) {
  
  let STORE = combineReducers({
    TradeState,
    UserState,
  });

  let STORED = createStore(STORE, composeWithDevTools(applyMiddleware(reduxSoldierMiddleware)));
  
  return (
    <Provider store={STORED}>
      {children}
    </Provider>
  );
}