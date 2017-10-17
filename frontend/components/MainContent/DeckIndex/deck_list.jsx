import React from "react";

class DeckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { targetDecks: this.props.decks[this.props.category] };
    this.deckIds = Object.keys(this.state.targetDecks);
    this.title = this.props.title;
    this.handleDeckClick = this.handleDeckClick.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div className="deck-list-container">
        <h3>{this.props.title}</h3>
        <div className="deck-list">
          <ul>
            {this.deckIds.map(deckId => {
              const deck = this.state.targetDecks[deckId];
              return (
                <li
                  key={deckId}
                  className="deck-list-item"
                  onClick={() => this.handleDeckClick(deck)}
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

  handleDeckClick(deck) {
    this.props.resetCurrentDeck();
    console.log(deck);
    console.log(this.props);
    const targetUrl =
      deck.creator.id == this.props.currentUserId &&
      this.props.category === "user"
        ? `/decks/${deck.id}/edit`
        : `/decks/${deck.id}`;
    this.props.history.push(targetUrl);
  }
}

export default DeckList;
