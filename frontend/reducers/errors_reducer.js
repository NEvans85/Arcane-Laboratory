import { combineReducers } from "redux";

import SessionErrorsReducer from "./Session/session_errors_reducer";
import DeckErrorsReducer from "./Decks/deck_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  deck: DeckErrorsReducer
});

export default ErrorsReducer;
