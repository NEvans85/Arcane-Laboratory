import React from "react";

class DeckCommentsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        <button>Leave a Comment</button>
      </div>
    );
  }
}

export default DeckCommentsHeader;
