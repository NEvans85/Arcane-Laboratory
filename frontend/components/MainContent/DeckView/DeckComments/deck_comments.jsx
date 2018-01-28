import React from "react";
import DeckCommentsHeader from "./DeckCommentsHeader/deck_comments_header";
import DeckCommentBox from "./DeckCommentBox/deck_comment_box";
import DeckCommentForm from "./DeckCommentForm/deck_comment_form_container";

class DeckComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentComments: this.props.parentComments,
      responseToId: null
    };

    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({ parentComments: newProps.parentComments });
  }

  render() {
    return (
      <div className="deck-comments-container">
        <DeckCommentsHeader
          loggedIn={this.props.loggedIn}
          deckId={this.props.deckId}
        />
        {this.state.parentComments.map(comment => (
          <DeckCommentBox
            sendData={this.getData}
            key={comment.id}
            comment={comment}
          />
        ))}
        {this.props.loggedIn ? (
          this.state.responseToId ? (
            <DeckCommentForm responseToId={this.state.responseToId} />
          ) : (
            <DeckCommentForm />
          )
        ) : null}
        }}
      </div>
    );
  }

  getData(val) {
    this.setState({ responseToId: val });
  }
}

export default DeckComments;
