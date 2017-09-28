import React from "react";
import DeckCommentsHeader from "./DeckCommentsHeader/deck_comments_header";
import DeckCommentBox from "./DeckCommentBox/deck_comment_box";

class DeckComments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return;
    <div>
      <DeckCommentsHeader />
      {this.props.parentComments.map(comment => (
        <DeckCommentBox comment={comment} />
      ))}
    </div>;
  }
}

export default DeckComments;
