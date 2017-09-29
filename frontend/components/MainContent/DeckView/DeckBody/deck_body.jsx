import React from "react";
import CardList from "./card_list";
import EditorCardList from "../../DeckEditor/EditorContainers/editor_card_list_container";

class DeckBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.sortedDeckCards;
    this.presentTypes = this.findPresentTypes();
    this.findPresentTypes = this.findPresentTypes.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState(newProps.sortedDeckCards);
  }

  findPresentTypes() {
    const types = Object.keys(this.state);
    return types.filter(
      type =>
        isNaN(type) && Object.getOwnPropertyNames(this.state[type]).length !== 0
    );
  }

  render() {
    return (
      <div className="deck-body">
        {this.presentTypes.map(type => {
          return this.props.editor ? (
            <EditorCardList key={type} title={type} cards={this.state[type]} />
          ) : (
            <CardList key={type} title={type} cards={this.state[type]} />
          );
        })}
      </div>
    );
  }
}

export default DeckBody;
