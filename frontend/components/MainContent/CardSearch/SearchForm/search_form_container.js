import { connect } from "react-redux";
import SearchForm from "./search_form";
import { search } from "../../../../actions/card_search_actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  search: queryParams => dispatch(search(queryParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
