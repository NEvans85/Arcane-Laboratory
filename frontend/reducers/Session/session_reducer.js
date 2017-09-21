import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const initialState = { currentUser: null };

const _nullSession = { currentUser: null };

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = action.currentUser
        ? Object.assign({}, state, { currentUser: action.currentUser })
        : (newState = _nullSession);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
