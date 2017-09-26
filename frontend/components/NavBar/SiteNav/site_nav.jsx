import React from "react";
import { Link } from "react-router-dom";

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const deckBuilderUrl = this.props.loggedIn
      ? `/users/${this.props.currentUser.id}/decks`
      : "/login";
    return (
      <div className="site-nav">
        <Link to="/decks">Browse Decks</Link>
        <Link to={deckBuilderUrl}>Deck Builder</Link>
        <Link to="/cards">Card Search</Link>
      </div>
    );
  }
}

export default SiteNav;
