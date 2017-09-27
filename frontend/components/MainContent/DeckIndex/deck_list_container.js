import { connect } from "react-redux";
import DeckList from "./deck_list";

const mapStateToProps = state => ({
  userDecks: state.decks
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
