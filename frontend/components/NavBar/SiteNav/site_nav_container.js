import { connect } from "react-redux";
import SiteNav from "./site_nav";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SiteNav);
