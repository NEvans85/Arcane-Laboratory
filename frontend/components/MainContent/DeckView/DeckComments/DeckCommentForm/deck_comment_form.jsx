import React from "react";

class DeckCommentFrom extends React.Component {
  constructor(props) {
    super(props);
    this.shortParent = this.shortParent.bind(this);
    this.state = {
      creator_id: props.creator_id,
      body: "",
      deck_id: props.deck_id,
      comment_id: null
    };
    if (props.parent) {
      this.setState((comment_id: props.parent.id));
    }
  }

  shortParent() {
    return `${this.props.parent.body.slice(0, 10)}... By ${this.props.parent
      .author}`;
  }

  render() {
    return (
      <div>
        <h4>Leave a Comment</h4>
        {this.props.parent ? <p>Response to {this.shortParent}</p> : null}}
        <form>
          <input
            type="textarea"
            onChange={this.updateInput("body")}
            value={this.state.body}
          />
          <input type="submit" value="Leave Comment" />
        </form>
      </div>
    );
  }
  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }
}

export default DeckCommentFrom;
