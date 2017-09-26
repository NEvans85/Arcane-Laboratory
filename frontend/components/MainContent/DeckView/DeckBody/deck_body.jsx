import React from "react";
import CardList from "./card_list";

class DeckBody extends React.Component {
  constructor(props) {
    super(props);
    this.sortedCards = this.props.sortedDeckCards;
    this.presentTypes = this.findPresentTypes();

    this.findPresentTypes = this.findPresentTypes.bind(this);
  }

  findPresentTypes() {
    const types = Object.keys(this.sortedCards);
    return types.filter(type => this.sortedCards[type].length > 0);
  }

  render() {
    console.log(this.presentTypes);
    console.log(this.sortedCards);
    return (
      <div>
        {this.presentTypes.map(type => {
          <CardList title={type} cards={this.sortedCards[type]} />;
        })}
      </div>
    );
  }
}

export default DeckBody;
