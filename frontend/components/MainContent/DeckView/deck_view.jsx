import React from "react";
import DeckHeader from "./DeckHeader/deck_header_container";
import DeckBody from "./DeckBody/deck_body_container";

class DeckView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchDeck(this.props.match.params.deck_id);
  }

  content() {
    if (this.props.currentDeck) {
      console.log(this.props.currentDeck);
      return (
        <div className="deck-view-container">
          <div className="deck-view">
            <DeckHeader />
            <DeckBody />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return this.content();
  }
}

export default DeckView;
