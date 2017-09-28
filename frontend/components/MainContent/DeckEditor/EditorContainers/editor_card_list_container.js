import { connect } from "react-redux";
import CardList from "../../DeckView/DeckBody/card_list";
import { updateDeck } from "../../../../actions/deck_actions";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck,
  editor: true
});

const mapDispatchToProps = dispatch => ({
  removeCard: (deck, ApiId) => dispatch(updateDeck(deck, "removeCard", ApiId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
