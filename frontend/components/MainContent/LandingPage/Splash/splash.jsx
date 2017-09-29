import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.handleButton = this.handleButton.bind(this);
  }

  render() {
    return (
      <div className="splash">
        <h2>The Arcane Laboratory</h2>
        <h3>
          A Place for you to build and share decks for Magic the Gathering
        </h3>
        <div className="action-buttons">
          <button onClick={() => this.handleButton("signUp")}>Sign Up</button>
          <button onClick={() => this.handleButton("browse")}>
            Browse Decks
          </button>
        </div>
      </div>
    );
  }

  handleButton(funct) {
    switch (funct) {
      case "signUp":
        this.props.history.push("/signup");
        break;
      case "browse":
        this.props.history.push("/decks");
        break;
      default:
        break;
    }
  }
}

export default Splash;
