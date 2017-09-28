import React from "react";
import CardList from "./card_list";
import EditorCardList from "../../DeckEditor/EditorContainers/editor_card_list_container";

class DeckBody extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.sortedCards = this.props.sortedDeckCards;
    this.presentTypes = this.findPresentTypes();

    this.findPresentTypes = this.findPresentTypes.bind(this);
  }

  findPresentTypes() {
    const types = Object.keys(this.sortedCards);
    return types.filter(
      type => isNaN(type) && this.sortedCards[type].length > 0
    );
  }

  render() {
    return (
      <div className="deck-body">
        {this.presentTypes.map(type => {
          return this.props.editor ? (
            <EditorCardList
              key={type}
              title={type}
              cards={this.sortedCards[type]}
            />
          ) : (
            <CardList key={type} title={type} cards={this.sortedCards[type]} />
          );
        })}
      </div>
    );
  }
}

export default DeckBody;
