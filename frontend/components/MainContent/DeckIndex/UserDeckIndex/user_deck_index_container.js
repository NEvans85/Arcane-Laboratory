import { connect } from "react-redux";
import UserDeckIndex from "./user_deck_index";
import { fetchUserDecks } from "../../../../actions/deck_actions";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  fetchUserDecks: userId => dispatch(fetchUserDecks(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDeckIndex);
