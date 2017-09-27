import React from "react";

class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.targetDecks = this.props.decks[this.props.category];
    this.deckIds = Object.keys(this.targetDecks);
    this.title = this.props.title;
  }

  render() {
    console.log(this.targetDecks);
    return (
      <div className="deck-list">
        <ul>
          {this.deckIds.map(deckId => {
            const deck = this.targetDecks[deckId];
            return (
              <li key={deckId} onClick={() => this.handleDeckClick(deckId)}>
                <h4>{deck.title}</h4>
                <p>
                  Created by: {deck.creator.username}. Last updated:{" "}
                  {deck.updated_at}. Upvotes: {deck.upvotes}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleDeckClick(deckId) {
    console.log(deckId);
    this.props.resetCurrentDeck();
    this.props.history.push(`/decks/${deckId}`);
  }
}

export default DeckList;
