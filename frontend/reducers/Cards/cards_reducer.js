import {
  RECEIVE_CARD,
  RECEIVE_SEARCH_RESULTS
} from "../../actions/card_search_actions";
import { RECEIVE_DECK } from "../../actions/deck_actions";
import { merge } from "lodash";

const CardsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CARD:
      newState["selectedCard"] = action.card;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return action.cards;
    case RECEIVE_DECK:
      return action.deck.cards;
    default:
      return state;
  }
};

export default CardsReducer;
