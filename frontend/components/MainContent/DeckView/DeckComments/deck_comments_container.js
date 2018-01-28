import { connect } from "react-redux";
import DeckComments from "./deck_comments";
import { parentComments } from "../../../../Selectors/comments_selector";

const mapStateToProps = state => ({
  parentComments: parentComments(state.comments),
  loggedIn: Boolean(state.session.currentUser),
  deckId: state.decks.currentDeck.id
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments);
