import { connect } from "react-redux";
import SearchForm from "./search_form";
import {
  search,
  resetCardState
} from "../../../../actions/card_search_actions";
import { startLoading } from "../../../../actions/ui_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(search(queryParams)),
  startLoading: () => dispatch(startLoading()),
  resetCardState: () => dispatch(resetCardState())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
