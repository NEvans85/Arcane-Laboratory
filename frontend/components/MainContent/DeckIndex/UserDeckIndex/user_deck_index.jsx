import React from "react";
import DeckList from "../deck_list_container";

class UserDeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
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

  render() {
    return this.content();
  }
}

export default UserDeckIndex;
