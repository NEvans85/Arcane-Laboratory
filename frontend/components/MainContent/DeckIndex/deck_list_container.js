import { connect } from "react-redux";
import DeckList from "./deck_list";
import { deleteDeck } from "../../../actions/deck_actions";

const mapStateToProps = state => {
  return {
    decks: state.decks
  };
};

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
