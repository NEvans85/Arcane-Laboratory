import { combineReducers } from "redux";

import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./Session/session_reducer";
import CardsReducer from "./Cards/cards_reducer";
import DecksReducer from "./Decks/decks_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  cards: CardsReducer,
  decks: DecksReducer
});

export default RootReducer;
