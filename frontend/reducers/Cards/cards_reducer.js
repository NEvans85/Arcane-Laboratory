import {
  RECEIVE_CARD,
  RECEIVE_SEARCH_RESULTS
} from "../../actions/card_actions";
import { RECEIVE_DECK } from "../../actions/deck_actions";
import { merge } from "lodash";
import { sortCardsByType } from "../../Selectors/deck_selectors";

const CardsReducer = (state = { search: {}, deckCards: {} }, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CARD:
      newState["selectedCard"] = action.card;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState["search"] = action.cards;
      return newState;
    case RECEIVE_DECK:
      if (!action.deck.cards) {
        action.deck.cards = [];
      }
      newState["deckCards"] = sortCardsByType(action.deck.cards);
      return newState;
    default:
      return state;
  }
};

export default CardsReducer;
