import React from "react";
import update from "react-addons-update";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: props.cards };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ cards: newProps.cards });
  }

  cardListItem(card) {
    return this.props.editor ? (
      <li className="editor card-list-item" key={card.id}>
        <div className="card-name">
          {card.count} x {card.name}
          <span>
            <img src={card.image_url} alt={`${card.name} image`} />
          </span>
        </div>
        <div className="change-buttons">
          <button onClick={() => this.handleChange("+", card)}>+</button>
          <button onClick={() => this.handleChange("-", card)}>-</button>
        </div>
      </li>
    ) : (
      <li key={card.id} className="card-list-item">
        <div className="card-name">
          {card.count} x {card.name}
          <span>
            <img src={card.image_url} alt={`${card.name} image`} />
          </span>
        </div>
      </li>
    );
  }

  handleChange(key, card) {
    if (key === "+") {
      this.props.addCard(this.props.currentDeck, card.api_id);
    } else {
      this.props.removeCard(this.props.currentDeck, card.api_id);
    }
  }

  render() {
    const cards = Object.values(this.state.cards);
    return (
      <div className="card-list">
        <h3>{this.props.title}</h3>
        <ul>{cards.map(card => this.cardListItem(card))}</ul>
      </div>
    );
  }
}

export default CardList;
