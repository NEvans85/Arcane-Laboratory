import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

const emptyState = {
  cards: {
    selectedCard: {
      name: null,
      mana_cost: null,
      rarity: null,
      text: null,
      flavor: null,
      power: null,
      toughness: null,
      loyalty: null,
      cmc: null,
      image_url:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=5764&type=card",
      type: null,
      set_name: null,
      colors: null,
      printings: null,
      id: null
    }
  }
};

export default configureStore;
