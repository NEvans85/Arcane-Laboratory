import { RECEIVE_DECK, RECEIVE_DECKS } from "../../actions/deck_actions";
import { merge } from "lodash";

const DecksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DECK:
      newState["currentDeck"] = action.deck;
    case RECEIVE_DECKS:
      return merge({}, newState, action.decks);
    default:
      return state;
  }
};

export default DecksReducer;
