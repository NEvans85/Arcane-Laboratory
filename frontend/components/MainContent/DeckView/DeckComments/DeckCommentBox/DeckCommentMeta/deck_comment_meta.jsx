import React from "react";
import DeckCommentFooter from "../DeckCommentFooter/deck_comment_footer_container";
import DeckCommentBox from "../deck_comment_box";

class DeckCommentMeta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="deck-comment-meta">
        <DeckCommentFooter id={this.props.id} />
        {this.props.childComments.map(childComment => (
          <DeckCommentBox comment={childComment} />
        ))}
      </div>
    );
  }
}

export default DeckCommentMeta;
