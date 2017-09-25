import { RECEIVE_DECK, RECEIVE_DECKS } from "../../actions/deck_actions";
import { merge } from "lodash";

const decksReducer = (state = initialState, action) => {
  Object.freeze(state);
  newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DECK:
      newState["currentDeck"] = action.deck;
    case RECEIVE_DECKS:
      return action.decks;
    default:
      return state;
  }
};
