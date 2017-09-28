import { RECEIVE_DECK, RESET_CURRENT_DECK } from "../../actions/deck_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DECK:
      if (action.deck.comments) {
        return action.deck.comments;
      } else {
        return newState;
      }
    case RESET_CURRENT_DECK:
      return {};
    default:
      return newState;
  }
};

export default CommentsReducer;
