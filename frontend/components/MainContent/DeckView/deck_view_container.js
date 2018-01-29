import { connect } from "react-redux";
import DeckView from "./deck_view";
import {
  fetchDeck,
  updateDeck,
  resetCurrentDeck
} from "../../../actions/deck_actions";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck,
  sortedCards: state.cards
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: deckId => dispatch(fetchDeck(deckId)),
  resetCurrentDeck: () => dispatch(resetCurrentDeck())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
