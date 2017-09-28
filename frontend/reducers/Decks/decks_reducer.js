import {
  RECEIVE_DECK,
  RECEIVE_DECKS,
  RESET_CURRENT_DECK
} from "../../actions/deck_actions";
import { merge } from "lodash";

const initialState = {};
const DecksReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DECK:
      newState["currentDeck"] = action.deck;
      delete newState["currentDeck"]["cards"];
      delete newState["currentDeck"]["comments"];
      return newState;
    case RECEIVE_DECKS:
      newState[action.category] = action.decks;
      return newState;
    case RESET_CURRENT_DECK:
      delete newState["currentDeck"];
      return newState;
    default:
      return state;
  }
};

export default DecksReducer;
