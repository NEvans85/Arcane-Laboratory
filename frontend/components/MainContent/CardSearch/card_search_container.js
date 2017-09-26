import { connect } from "react-redux";
import CardSearch from "./card_search";
import * as CardSearchActions from "../../../actions/card_search_actions";

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(CardSearchActions.search(queryParams)),
  cardDetails: cardID => dispatch(CardSearchActions.cardDetails(cardID)),
  resetCardState: () => dispatch(CardSearchActions.resetCardState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);
