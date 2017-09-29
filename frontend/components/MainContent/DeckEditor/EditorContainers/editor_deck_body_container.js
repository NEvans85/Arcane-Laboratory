import { connect } from "react-redux";
import DeckBody from "../../DeckView/DeckBody/deck_body";

const mapStateToProps = state => ({
  sortedDeckCards: state.cards.deckCards,
  editor: true
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBody);
