import React from "react";

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
