import { RECEIVE_DECK, RESET_CURRENT_DECK } from "../../actions/deck_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DECK:
      return action.deck.comments;
    default:
      return newState;
  }
};

export default CommentsReducer;
