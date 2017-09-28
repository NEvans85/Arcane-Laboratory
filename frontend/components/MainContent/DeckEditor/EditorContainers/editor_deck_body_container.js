import { connect } from "react-redux";
import DeckBody from "../../DeckView/DeckBody/deck_body";
import { deleteDeck } from "../../../../actions/deck_actions";

const mapStateToProps = state => ({
  sortedDeckCards: state.cards
});

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBody);
