import React from "react";

class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.targetDecks = this.props.decks[this.props.category];
    this.deckIds = Object.keys(this.targetDecks);
    this.title = this.props.title;
  }

  render() {
    console.log(this.props);
    return (
      <div className="deck-list-container">
        <h3>{this.props.title}</h3>
        <div className="deck-list">
          <ul>
            {this.deckIds.map(deckId => {
              const deck = this.targetDecks[deckId];
              return (
                <li
                  key={deckId}
                  className="deck-list-item"
                  onClick={() => this.handleDeckClick(deckId)}
                >
                  <h4>{deck.title}</h4>
                  <p>
                    Created by: {deck.creator.username} -- Upvotes:{" "}
                    {deck.upvotes} -- Last updated: {deck.updated_at} ago.
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  handleDeckClick(deckId) {
    this.props.resetCurrentDeck();
    this.props.history.push(`/decks/${deckId}`);
  }
}

export default DeckList;
