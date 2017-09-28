import React from "react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  cardListItem(card) {
    return this.props.editor ? (
      <li className="editor-card-list-item" key={card.id}>
        {card.count} x {card.name}
        <button
          onClick={() =>
            this.props.addCard(this.props.currentDeck, card.api_id)}
        >
          +
        </button>
        <button
          onClick={() =>
            this.props.removeCard(this.props.currentDeck, card.api_id)}
        >
          -
        </button>
      </li>
    ) : (
      <li key={card.id} className="card-list-item">
        {card.count} x {card.name}
      </li>
    );
  }

  render() {
    return (
      <div className="card-list">
        <h3>{this.props.title}</h3>
        <ul>{this.props.cards.map(card => this.cardListItem(card))}</ul>
      </div>
    );
  }
}

export default CardList;
