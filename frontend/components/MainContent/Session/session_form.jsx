import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();
    this.formType = this.props.formType;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoButton = this.handleDemoButton.bind(this);
    this.usernameField = this.usernameField.bind(this);
    this.passwordField = this.passwordField.bind(this);
    this.emailField = this.emailField.bind(this);
    this.sessionErrors = this.sessionErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`/users/${nextProps.currentUser.id}/decks`);
    }
  }

  defaultState() {
    return {
      username: "",
      password: "",
      email: ""
    };
  }

  render() {
    const label = this.formType === "signup" ? "Sign Up" : "Log In";
    return (
      <div className="session-form-view">
        <div className="session-form-box">
          <h2 className="session-form-title">{label}</h2>
          <form onSubmit={this.handleSubmit} className="session-form">
            <this.usernameField />
            <this.passwordField />
            {this.props.formType === "signup" ? <this.emailField /> : null}
            <this.sessionErrors />
            <input
              className="session-form-button"
              type="submit"
              value={label}
            />
            {this.props.formType === "login" ? (
              <button
                className="session-form-button"
                onClick={this.handleDemoButton}
              >
                Demo Login
              </button>
            ) : (
              <div />
            )}
            {this.props.formType === "signup" ? (
              <button
                className="session-form-button"
                onClick={() => this.props.history.push("/login")}
              >
                Go To Log In
              </button>
            ) : (
              <button
                className="session-form-button"
                onClick={() => this.props.history.push("/signup")}
              >
                Go To Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }

  usernameField() {
    return (
      <input
        onChange={this.updateInput("username")}
        type="text"
        className="session-form-input"
        placeholder="Username"
        value={this.state.username}
      />
    );
  }

  passwordField() {
    return (
      <input
        onChange={this.updateInput("password")}
        type="password"
        className="session-form-input"
        placeholder="Password"
        value={this.state.password}
      />
    );
  }

  emailField() {
    return (
      <input
        onChange={this.updateInput("email")}
        type="text"
        className="session-form-input"
        placeholder="Email"
        value={this.state.email}
      />
    );
  }

  sessionErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map(errorMessage => {
          return <li>{errorMessage}</li>;
        })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState(this.defaultState);
  }

  handleDemoButton(e) {
    e.preventDefault();
    this.setState(this.defaultState);
    const demoUser = Array.from("DemoUser");
    const demoPassword = Array.from("DemoPassword");

    let demoInputInterval = () => {
      const intervalId = setInterval(() => {
        if (demoUser.length > 0) {
          let username = this.state.username;
          username += demoUser.shift();
          this.setState({ username: username });
        } else if (demoPassword.length > 0) {
          let password = this.state.password;
          password += demoPassword.shift();
          this.setState({ password: password });
        } else {
          clearInterval(intervalId);
          this.props.processForm(this.state);
        }
      }, 100);
    };
    demoInputInterval();
  }

  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
}

export default SessionForm;
