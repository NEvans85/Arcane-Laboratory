import { connect } from "react-redux";
import SearchResults from "./search_results";
import { cardDetails } from "../../../../actions/card_search_actions";

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  cardDetails: cardID => dispatch(cardDetails(cardID))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
