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
      this.props.history.push("/");
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
            <button
              className="session-form-button"
              onClick={this.handleDemoButton}
            >
              Demo Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  usernameField() {
    return (
      <label className="session-form-label">
        <p>Username:</p>
        <input
          onChange={this.updateInput("username")}
          type="text"
          value={this.state.username}
        />
      </label>
    );
  }

  passwordField() {
    return (
      <label className="session-form-label">
        <p>Password:</p>
        <input
          onChange={this.updateInput("password")}
          type="password"
          value={this.state.password}
        />
      </label>
    );
  }

  emailField() {
    return (
      <label className="session-form-label">
        Email:
        <input
          onChange={this.updateInput("email")}
          type="text"
          value={this.state.email}
        />
      </label>
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
    if (this.formType === "signup") {
      this.props.history.push("/login");
    }
  }

  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
}

export default SessionForm;
