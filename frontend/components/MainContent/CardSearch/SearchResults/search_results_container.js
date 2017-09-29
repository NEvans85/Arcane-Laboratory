import { connect } from "react-redux";
import SearchResults from "./search_results";
import { cardDetails } from "../../../../actions/card_actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    cards: state.cards.search,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = dispatch => ({
  cardDetails: cardID => dispatch(cardDetails(cardID))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
