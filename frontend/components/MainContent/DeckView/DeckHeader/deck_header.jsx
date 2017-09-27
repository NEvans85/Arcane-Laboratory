import React from "react";

class DeckHeader extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.currentDeck.title;
    this.description = this.props.currentDeck.description;
    this.upvotes = this.props.currentDeck.upvotes;
    this.createdAt = this.props.currentDeck.created_at;
    this.updatedAt = this.props.currentDeck.updated_at;
    this.creatorName = this.props.currentDeck.creator.username;
  }

  render() {
    return (
      <div className="deck-header">
        <h2>{this.title}</h2>
        <h3>
          Created By: {this.creatorName} {this.createdAt} ago, Last Updated {" "}
          {this.updatedAt} ago, Upvotes: {this.upvotes}
        </h3>
        <p>{this.description}</p>
        <button onClick={() => this.props.upvote(this.props.currentDeck)}>
          Upvote
        </button>
      </div>
    );
  }
}

export default DeckHeader;
