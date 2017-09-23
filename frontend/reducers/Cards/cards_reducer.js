import {
  RECEIVE_CARD,
  RECEIVE_SEARCH_RESULTS
} from "../../actions/card_search_actions";
import { merge } from "lodash";

const CardsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CARD:
      newState[action.card.id] = action.card;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign(newState, action.cards);
    default:
  }
};

export default CardsReducer;
