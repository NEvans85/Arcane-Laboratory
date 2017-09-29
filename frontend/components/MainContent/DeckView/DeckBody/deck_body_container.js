import { connect } from "react-redux";
import DeckBody from "./deck_body";

const mapStateToProps = state => ({
  sortedDeckCards: state.cards.deckCards,
  presentTypes: findPresentTypes(state.cards.deckCards)
});

const findPresentTypes = sortedCards => {
  const types = Object.keys(sortedCards);
  return types.filter(
    type =>
      isNaN(type) && Object.getOwnPropertyNames(sortedCards[type]).length !== 0
  );
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBody);
