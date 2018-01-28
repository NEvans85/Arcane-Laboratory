import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class DeckCommentsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="deck-comments-header">
        <h3>Comments</h3>
        {this.props.loggedIn ? (
          <Link to={`/decks/${this.props.deckId}#addComment`}>
            <button onClick={this.handleNewCommentButton}>
              Leave a Comment
            </button>
          </Link>
        ) : null}
      </div>
    );
  }

  handleNewCommentButton(e) {
    e.preventDefault();
  }
}

export default DeckCommentsHeader;
