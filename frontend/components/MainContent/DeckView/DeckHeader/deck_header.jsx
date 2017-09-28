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
        <h2 className="deck-title">{this.title}</h2>
        <h3 className="deck-details">
          Created By: {this.creatorName} {this.createdAt} ago, Last Updated {" "}
          {this.updatedAt} ago, Upvotes: {this.upvotes}
        </h3>
        <p className="deck-description">{this.description}</p>
      </div>
    );
  }
}

export default DeckHeader;
