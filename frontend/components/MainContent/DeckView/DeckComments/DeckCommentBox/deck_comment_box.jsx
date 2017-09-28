import React from "react";
import DeckCommentBody from "./DeckCommentBody/deck_comment_body";
import DeckCommentMeta from "./DeckCommentMeta/deck_comment_meta_container";

class DeckCommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DeckCommentBody content={this.props.comment.body} />
        <DeckCommentMeta id={this.props.comment.id} />
      </div>
    );
  }
}

export default DeckCommentBox;
