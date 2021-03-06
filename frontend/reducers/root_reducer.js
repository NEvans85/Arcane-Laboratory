import { combineReducers } from "redux";

import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./Session/session_reducer";
import CardsReducer from "./Cards/cards_reducer";
import DecksReducer from "./Decks/decks_reducer";
import UiReducer from "./ui_reducer";
import CommentsReducer from "./Comments/comments_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  cards: CardsReducer,
  decks: DecksReducer,
  comments: CommentsReducer,
  ui: UiReducer
});

export default RootReducer;
