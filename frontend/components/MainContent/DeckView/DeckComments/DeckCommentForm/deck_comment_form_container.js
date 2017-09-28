import { connect } from "react-redux";
import DeckCommentForm from "./deck_comment_form";

const mapStateToProps = (state, ownProps) => ({
  creator_id: state.session.currentUser.id,
  deck_id: state.decks.currentDeck.id,
  parent: ownProps.response ? state.comments[ownProps.id] : undefined
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentForm);
