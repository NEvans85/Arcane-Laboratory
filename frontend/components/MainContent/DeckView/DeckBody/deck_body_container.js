import { connect } from "react-redux";
import DeckBody from "./deck_body";

const mapStateToProps = state => ({
  sortedDeckCards: state.cards.deckCards
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBody);
