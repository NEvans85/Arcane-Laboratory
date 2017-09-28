import React from "react";

class DeckCommentFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="comment-footer-text">
          Created {this.props.comment.created} ago by{" "}
          {this.props.comment.author}
        </p>
        {this.props.loggedIn ? (
          <div className="comment-buttons">
            <button onClick={this.handleReplyButton}>Reply</button>
            <button onClick={this.handleReportButton}>Report</button>
          </div>
        ) : null}}
      </div>
    );
  }
}

export default DeckCommentFooter;
