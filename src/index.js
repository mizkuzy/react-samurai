import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

export const renderEntireTree = (store) =>
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );

renderEntireTree(store);
store.subscribe(() => {
  renderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
