import { connect } from "react-redux";
import CardList from "../../DeckView/DeckBody/card_list";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  removeCard: (deck, ApiId) => dispatch(updateCard(deck, "removeCard", ApiId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
