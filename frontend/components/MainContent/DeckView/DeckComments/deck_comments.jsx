import React from "react";
import DeckCommentsHeader from "./DeckCommentsHeader/deck_comments_header";
import DeckCommentBox from "./DeckCommentBox/deck_comment_box";
import DeckCommentForm from "./DeckCommentForm/deck_comment_form_container";

class DeckComments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="deck-comments-container">
        <DeckCommentsHeader loggedIn={this.props.loggedIn} />
        {this.props.parentComments.map(comment => (
          <DeckCommentBox key={comment.id} comment={comment} />
        ))}
        {this.props.loggedIn ? <DeckCommentForm /> : null}
        }}
      </div>
    );
  }
}

export default DeckComments;
