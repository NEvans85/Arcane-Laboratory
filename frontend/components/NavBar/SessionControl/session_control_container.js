import { connect } from "react-redux";
import SessionControl from "./session_control";
import { logout } from "../../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionControl);
