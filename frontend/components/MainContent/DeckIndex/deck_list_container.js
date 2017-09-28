import { connect } from "react-redux";
import DeckList from "./deck_list";
import { withRouter } from "react-router-dom";
import { deleteDeck, resetCurrentDeck } from "../../../actions/deck_actions";

const mapStateToProps = state => {
  return {
    decks: state.decks,
    loggedIn: Boolean(state.session.currentUser),
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id)),
  resetCurrentDeck: () => dispatch(resetCurrentDeck())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeckList)
);
