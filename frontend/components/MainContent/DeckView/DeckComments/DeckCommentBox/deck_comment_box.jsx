import React from "react";
import DeckCommentBody from "./DeckCommentBody/deck_comment_body";
import DeckCommentMeta from "./DeckCommentMeta/deck_comment_meta_container";

class DeckCommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  render() {
    return (
      <div className="deck-comment-box">
        <DeckCommentBody content={this.props.comment.body} />
        <DeckCommentMeta sendData={this.getData} id={this.props.comment.id} />
      </div>
    );
  }

  getData(val) {
    this.props.sendData(val);
  }
}

export default DeckCommentBox;
