import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// For Testing
import * as DeckActions from "./actions/deck_actions";

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

window.postDeck = DeckActions.postDeck;
window.updateDeck = DeckActions.updateDeck;
window.deleteDeck = DeckActions.deleteDeck;
window.fetchDecks = DeckActions.fetchDecks;
window.fetchUserDecks = DeckActions.fetchUserDecks;
window.fetchDeck = DeckActions.fetchDeck;
