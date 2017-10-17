import React from "react";
import { Link } from "react-router-dom";

class SessionControl extends React.Component {
  constructor(props) {
    super(props);
    this.guestControl = this.guestControl.bind(this);
    this.userControl = this.userControl.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  render() {
    return (
      <div className="session-control">
        {this.props.loggedIn ? <this.userControl /> : <this.guestControl />}
      </div>
    );
  }

  guestControl() {
    return (
      <div>
        <button
          className="header-button"
          onClick={() => this.handleButton("signup")}
        >
          Sign Up
        </button>
        <a href="/#/login">
          <button
            className="header-button"
            onClick={() => this.handleButton("login")}
          >
            Log In
          </button>
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
        <button
          className="header-button"
          onClick={() => this.handleButton("logout")}
        >
          Log Out
        </button>
      </div>
    );
  }

  handleButton(option) {
    if (option === "logout") {
      this.props.logout();
      this.props.history.push("/login");
    } else {
      this.props.history.push(`/${option}`);
    }
  }
}

export default SessionControl;
