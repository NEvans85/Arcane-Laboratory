import React from "react";

class DeckCommentFrom extends React.Component {
  constructor(props) {
    super(props);
    this.shortresponseTo = this.shortresponseTo.bind(this);
    this.state = {
      creator_id: props.creator_id,
      body: "",
      deck_id: props.deck_id,
      responseTo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ responseTo: newProps.responseTo, body: "" });
  }

  shortresponseTo() {
    const short = `${this.state.responseTo.body.slice(0, 20)}... By ${
      this.state.responseTo.author
    }`;
    return short;
  }

  render() {
    return (
      <div className="deck-comment-form-container">
        <h4 id="addComment">Leave a Comment</h4>
        {this.state.responseTo ? (
          <p>Response to {this.shortresponseTo()}</p>
        ) : null}
        <form className="deck-comment-form" onSubmit={this.handleSubmit}>
          <textarea
            className="comment-input"
            onChange={this.updateInput("body")}
            value={this.state.body}
          />

          <input type="submit" value="Leave Comment" />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      author_id: this.props.authorId,
      deck_id: this.props.deckId,
      body: this.state.body
    };
    if (this.state.responseTo) {
      comment["comment_id"] = this.state.responseTo.id;
    }
    this.props.createComment(comment);
    this.setState({ responseTo: null, body: "" });
  }
  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
}

export default DeckCommentFrom;
