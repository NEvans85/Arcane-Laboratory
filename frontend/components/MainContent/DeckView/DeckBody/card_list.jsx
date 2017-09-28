import React from "react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  cardListItem(card) {
    return this.props.removeCard ? (
      <li
        key={card.id}
        onClick={() =>
          this.props.removeCard(this.props.currentDeck, card.api_id)}
      >
        {card.count} x {card.name}
      </li>
    ) : (
      <li key={card.id}>
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
