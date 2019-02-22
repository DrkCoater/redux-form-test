import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/app";
import reducers from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware()
  // other store enhancers if any
);

const defaultState = {
  form: null,
  profile: {
    user: {
      title: 'Hello',
      email: 'World'
    }
  }
};

ReactDOM.render(
  <Provider store={createStore(reducers, defaultState, enhancer)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
