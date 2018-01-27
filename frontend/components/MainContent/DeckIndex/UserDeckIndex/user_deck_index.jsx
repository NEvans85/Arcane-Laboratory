import React from "react";
import DeckList from "../deck_list_container";

class UserDeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.handleNewDeck = this.handleNewDeck.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserDecks(this.currentUser.id);
  }

  componentWillUnmount() {
    this.props.resetUserDecks();
  }

  content() {
    if (this.props.decks.user) {
      return (
        <div className="deck-index">
          <div className="user-decks">
            <button className="new-deck-button" onClick={this.handleNewDeck}>
              Create New Deck
            </button>
            <DeckList
              title={`${this.currentUser.username}'s Decks - Click To Edit`}
              category="user"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  handleNewDeck(e) {
    e.preventDefault();
    this.props.postDeck(this.currentUser.id);
  }

  render() {
    return this.content();
  }
}

export default UserDeckIndex;
