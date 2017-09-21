import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup } from "../../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.location.pathname.slice(1)) {
    case "login":
      return { processForm: user => dispatch(login(user)) };
    case "signup":
      return { processForm: user => dispatch(signup(user)) };
    default:
      console.log("formType matche rror in MDisp2P in session form container");
      break;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
