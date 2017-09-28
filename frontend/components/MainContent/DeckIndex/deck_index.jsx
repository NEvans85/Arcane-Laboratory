import React from "react";
import DeckList from "./deck_list_container";

class DeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["New", "Top", "Standard", "Modern"];
  }

  componentWillMount() {
    this.categories.forEach(category => {
      this.props.fetchDecks(category);
    });
  }

  render() {
    return (
      <div className="deck-index">
        <div className="deck-lists">
          {this.categories.map(category => {
            if (this.props.decks[category]) {
              return (
                <DeckList
                  key={category}
                  title={`${category} Decks`}
                  category={category}
                />
              );
            } else {
              return <div key={category} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default DeckIndex;
