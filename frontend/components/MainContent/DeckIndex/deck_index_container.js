import { connect } from "react-redux";
import DeckIndex from "./deck_index";
import { fetchDecks } from "../../../actions/deck_actions";

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: category => dispatch(fetchDecks(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
