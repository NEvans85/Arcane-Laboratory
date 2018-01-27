import { postComment } from "../util/comment_api_util";
import { fetchDeck } from "./deck_actions";

export const createComment = comment => dispatch =>
  postComment(comment).then(deck => dispatch(fetchDeck(deck.id)));
