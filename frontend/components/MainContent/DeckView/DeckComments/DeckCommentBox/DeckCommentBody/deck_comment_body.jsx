import React from "react";

class DeckCommentBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="deck-comment-body">{this.props.content}</div>;
  }
}

export default DeckCommentBody;
