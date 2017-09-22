import React from "react";
import { Link } from "react-router-dom";

class SessionControl extends React.Component {
  constructor(props) {
    super(props);
    this.guestControl = this.guestControl.bind(this);
    this.userControl = this.userControl.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div className="session-control">
        {this.props.loggedIn ? <this.userControl /> : <this.guestControl />}
      </div>
    );
  }

  guestControl() {
    return (
      <div>
        <a href="/#/signup">
          <button className="header-button">Sign Up</button>
        </a>
        <a href="/#/login">
          <button className="header-button">Log In</button>
        </a>
      </div>
    );
  }

  userControl() {
    return (
      <div>
        <p className="header-message">
          Welcome, {this.props.currentUser.username}!
        </p>
        <button className="header-button" onClick={this.props.logout}>
          Log Out
        </button>
      </div>
    );
  }
}

export default SessionControl;
