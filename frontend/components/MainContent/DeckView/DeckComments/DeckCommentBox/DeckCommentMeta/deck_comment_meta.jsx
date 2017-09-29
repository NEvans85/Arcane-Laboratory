import React from "react";
import DeckCommentFooter from "../DeckCommentFooter/deck_comment_footer_container";
import DeckCommentBox from "../deck_comment_box";

class DeckCommentMeta extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  render() {
    return (
      <div className="deck-comment-meta">
        <DeckCommentFooter sendData={this.getData} id={this.props.id} />
        {this.props.childComments.map(childComment => (
          <DeckCommentBox
            sendData={this.getData}
            key={childComment.id}
            comment={childComment}
          />
        ))}
      </div>
    );
  }

  getData(val) {
    this.props.sendData(val);
  }
}

export default DeckCommentMeta;
