import React from "react";
import { Redirect } from "react-router";

class SessionControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.guestControl = this.guestControl.bind(this);
  }

  render() {
    return (
      <div className="session-control">
        {this.props.loggedin ? <this.userControl /> : <this.guestControl />}
      </div>
    );
  }

  guestControl() {
    return (
      <div>
        <button className="header-button" onClick={this.handleButton("signUp")}>
          Sign Up
        </button>
        <button className="header-button" onClick={this.handleButton("logIn")}>
          Log In
        </button>
      </div>
    );
  }

  handleButton(type) {
    return type === "signUp" ? (
      <Redirect push to="/signUp" />
    ) : (
      <Redirect push to="/logIn" />
    );
  }

  userControl() {
    return (
      <div>
        <p className="header-message"> Welcome, {currentUser.username}!</p>
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </div>
    );
  }
}

export default SessionControl;
