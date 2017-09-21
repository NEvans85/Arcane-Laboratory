import React from "react";
import { Link } from "react-router-dom";

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/decks">Decks</Link>
        <Link to="/cards">Cards</Link>
      </div>
    );
  }
}

export default SiteNav;
