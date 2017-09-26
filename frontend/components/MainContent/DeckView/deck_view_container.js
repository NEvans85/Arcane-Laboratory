import { connect } from "react-redux";
import DeckView from "./deck_view";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: deck_id => dispatch(fetchDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
