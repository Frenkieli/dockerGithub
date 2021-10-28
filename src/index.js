import React from "react";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import App from "./components/App";

const loggerMiddleware = createLogger();

let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware, // 讓我們來 dispatch() function
    loggerMiddleware // 巧妙的 middleware，用來 log action
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
