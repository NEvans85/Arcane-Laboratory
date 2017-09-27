import React from "react";
import DeckList from "../deck_list_container";

class UserDeckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  componentWillMount() {
    this.props.resetDeckState();
    this.props.fetchUserDecks(this.currentUser.id);
  }

  render() {
    return (
      <div className="user-decks">
        <DeckList title={`${currentUser.username}'s Decks`} />
      </div>
    );
  }
}

export default UserDeckIndex;
