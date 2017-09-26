import { START_LOADING } from "../actions/ui_actions";

const initialState = { loading: false };

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case START_LOADING:
      newState["loading"] = true;
      return newState;
    default:
      newState["loading"] = false;
      return newState;
  }
};

export default UiReducer;
