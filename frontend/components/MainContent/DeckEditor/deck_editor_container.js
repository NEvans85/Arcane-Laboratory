import { connect } from "react-redux";
import DeckEditor from "./deck_editor";
import { fetchDeck } from "../../../actions/deck_actions";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckEditor);
