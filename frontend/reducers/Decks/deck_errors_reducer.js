import { RECEIVE_DECK_ERRORS } from "../../actions/deck_actions";

const initialState = [];

const DeckErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK_ERRORS:
      const newState = [];
      return newState.concat(action.errors.responseJSON);
    default:
      return state;
  }
};

export default DeckErrorsReducer;
