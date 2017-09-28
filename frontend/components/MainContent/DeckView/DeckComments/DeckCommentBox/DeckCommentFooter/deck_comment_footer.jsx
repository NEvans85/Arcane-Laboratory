import React from "react";

class DeckCommentFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          Created {this.props.comment.created} ago by{" "}
          {this.props.comment.author}
        </p>
        <button onClick={this.handleReplyButton}>Reply</button>
        <button onClick={this.handleReportButton}>Report</button>
      </div>
    );
  }
}

export default DeckCommentFooter;
