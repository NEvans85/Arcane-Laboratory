import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  defaultState() {
    return {
      username: "",
      password: ""
    };
  }

  render() {
    const label = this.props.formType === "signup" ? "Sign Up" : "Log In";
    console.log(this.props);
    return (
      <div>
        <h2>{label}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              onChange={this.updateInput("username")}
              type="text"
              value={this.state.username}
            />
          </label>
          <label>
            Password
            <input
              onChange={this.updateInput("password")}
              type="password"
              value={this.state.password}
            />
          </label>
          <ul>
            {this.props.errors.map(errorMessage => {
              return <li>{errorMessage}</li>;
            })}
          </ul>
          <br />
          <input type="submit" value={label} />
        </form>
        <br />
        {this.props.formType === "signup" ? (
          <Link to="/login">Log In</Link>
        ) : (
          <Link to="/signup">Sign Up</Link>
        )}
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState(this.defaultState);
  }

  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
}

export default SessionForm;
