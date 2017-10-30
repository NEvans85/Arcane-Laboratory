import React from "react";
import CardList from "./card_list";
import EditorCardList from "../../DeckEditor/EditorContainers/editor_card_list_container";

class DeckBody extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cards: this.props.sortedDeckCards,
      types: this.props.presentTypes
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      cards: newProps.sortedDeckCards,
      types: newProps.presentTypes
    });
  }

  render() {
    return (
      <div className="deck-body">
        {this.state.types.map(type => {
          return this.props.editor ? (
            <EditorCardList
              key={type}
              title={type}
              cards={this.state.cards[type]}
            />
          ) : (
            <CardList key={type} title={type} cards={this.state.cards[type]} />
          );
        })}
      </div>
    );
  }
}

export default DeckBody;
