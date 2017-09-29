import { connect } from "react-redux";
import DeckList from "./deck_list";
import { withRouter } from "react-router-dom";
import { deleteDeck, resetCurrentDeck } from "../../../actions/deck_actions";

const mapStateToProps = state => {
  const stp = {
    decks: state.decks,
    loggedIn: Boolean(state.session.currentUser)
  };
  if (state.session.currentUser) {
    stp["currentUserId"] = state.session.currentUser.id;
  }
  return stp;
};

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id)),
  resetCurrentDeck: () => dispatch(resetCurrentDeck())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeckList)
);
