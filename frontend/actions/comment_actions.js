import { postComment } from "../util/comment_api_util";
import { receiveDeck } from "./deck_actions";

export const postComment = comment => dispatch =>
  postComment(comment).then(deck => dispatch(receiveDeck(deck)));
