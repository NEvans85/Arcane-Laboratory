import React from "react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-list">
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.cards.map(card => (
            <li key={card.id}>
              {card.count} x {card.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
