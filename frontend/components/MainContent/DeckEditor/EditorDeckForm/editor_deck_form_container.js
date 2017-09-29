import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditorDeckForm from "./editor_deck_form";
import { updateDeck, deleteDeck } from "../../../../actions/deck_actions";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  updateDeck: deck => dispatch(updateDeck(deck, "updateAttributes")),
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditorDeckForm)
);
