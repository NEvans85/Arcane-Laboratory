import React from "react";

class DeckCommentMeta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DeckCommentFooter />
        {this.props.childComments.map(childComment => (
          <DeckCommentBox comment={comment} />
        ))}
      </div>
    );
  }
}

export default DeckCommentMeta;
