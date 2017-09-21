import { combineReducers } from "redux";

import SessionErrorsReducer from "./Session/session_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducer;
