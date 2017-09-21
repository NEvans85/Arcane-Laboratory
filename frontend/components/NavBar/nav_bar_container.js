import { connect } from "react-redux";
import NavBar from "./nav_bar";

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
