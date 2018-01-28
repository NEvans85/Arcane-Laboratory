import React from "react";
import { HashLink as Link } from "react-router-hash-link";

class DeckCommentFooter extends React.Component {
  constructor(props) {
    super(props);

    this.handleReplyButton = this.handleReplyButton.bind(this);
  }

  render() {
    return (
      <div className="deck-comment-footer">
        <p className="comment-footer-text">
          Created {this.props.comment.created} ago by{" "}
          {this.props.comment.author}
        </p>
        {this.props.loggedIn ? (
          <div className="comment-buttons">
            <Link to={`/decks/${this.props.deckId}#addComment`}>
              <button onClick={this.handleReplyButton}>Reply</button>
            </Link>
            <button onClick={this.handleReportButton}>Report</button>
          </div>
        ) : null}
      </div>
    );
  }

  handleReplyButton(e) {
    e.preventDefault();
    this.props.sendData(this.props.comment.id);
  }
  handleReportButton(e) {
    e.preventDefault();
  }
}

export default DeckCommentFooter;
