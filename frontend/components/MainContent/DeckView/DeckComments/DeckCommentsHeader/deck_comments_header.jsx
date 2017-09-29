import React from "react";

class DeckCommentsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="deck-comments-header">
        <h3>Comments</h3>
        {this.props.loggedIn ? (
          <button onClick={this.handleNewCommentButton}>Leave a Comment</button>
        ) : null}
      </div>
    );
  }
}

export default DeckCommentsHeader;
