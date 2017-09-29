import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash">
        <h2>The Arcane Laboratory</h2>
        <h3>
          A Place for you to build and share decks for Magic the Gathering
        </h3>
        <div className="action-buttons">
          <button>Sign Up</button>
          <button>Browse Decks</button>
        </div>
      </div>
    );
  }
}

export default Splash;
