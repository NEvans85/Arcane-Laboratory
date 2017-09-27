import React from "react";

class DeckHeader extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.currentDeck.title;
    this.description = this.props.currentDeck.description;
    this.upvotes = this.props.currentDeck.upvotes;
    this.created_at = this.props.currentDeck.created_at;
    this.updated_at = this.props.currentDeck.updated_at;
  }

  render() {
    return (
      <div className="deck-header">
        <h2>{this.title}</h2>
        <h3>
          Created: {this.created_at}, Last Updated: {this.updated_at}, Upvotes:{" "}
          {this.upvotes}
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
