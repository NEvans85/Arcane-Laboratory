import { postComment } from "../util/comment_api_util";
import { receiveDeck } from "./deck_actions";

export const createComment = comment => dispatch =>
  postComment(comment).then(deck => dispatch(receiveDeck(deck)));
