import { connect } from "react-redux";
import DeckCommentForm from "./deck_comment_form";
import { createComment } from "../../../../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  authorId: state.session.currentUser.id,
  deckId: state.decks.currentDeck.id,
  responseTo: ownProps.responseToId
    ? state.comments[ownProps.responseToId]
    : undefined
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentForm);
