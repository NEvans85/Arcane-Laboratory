import { connect } from "react-redux";
import SearchResults from "../../CardSearch/SearchResults/search_results";
import { updateDeck } from "../../../../actions/deck_actions";

const mapStateToProps = state => ({
  cards: state.cards,
  loading: state.ui.loading,
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  addCard: (deck, apiId) => dispatch(updateDeck(deck, "addCard", apiId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
