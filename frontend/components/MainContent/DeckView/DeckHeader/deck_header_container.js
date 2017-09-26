import { connect } from "react-redux";
import DeckHeader from "./deck_header";

const mapStateToProps = state => ({
  currentDeck: state.decks.currentDeck
});

const mapDispatchToProps = dispatch => ({
  upvote: deck => dispatch(updateDeck(deck, "upvote"))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckHeader);
