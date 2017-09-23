import { connect } from "react-redux";
import SearchForm from "./search_form";
import * as CardSearchActions from "../../../../actions/card_search_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(CardSearchActions.search(queryParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
