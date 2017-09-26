import { connect } from "react-redux";
import DeckView from "./deck_view";

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: deck_id => dispatch(fetchDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
