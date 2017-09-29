import { connect } from "react-redux";
import CardSearch from "./card_search";
import * as CardActions from "../../../actions/card_actions";

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(CardActions.search(queryParams)),
  cardDetails: cardID => dispatch(CardActions.cardDetails(cardID)),
  resetSearchResults: () => dispatch(CardActions.resetSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);
