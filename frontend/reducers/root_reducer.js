import { combineReducers } from "redux";

import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./Session/session_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
