import { connect } from "react-redux";
import SearchForm from "./search_form";
import {
  search,
  resetSearchResults
} from "../../../../actions/card_actions";
import { startLoading } from "../../../../actions/ui_actions";

const mapStateToProps = state => ({
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(search(queryParams)),
  startLoading: () => dispatch(startLoading()),
  resetSearchResults: () => dispatch(resetSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
