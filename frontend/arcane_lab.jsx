import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// For Testing
import * as CardActions from "./actions/card_search_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  // For Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.search = CardActions.search;
window.cardDetails = CardActions.cardDetails;
