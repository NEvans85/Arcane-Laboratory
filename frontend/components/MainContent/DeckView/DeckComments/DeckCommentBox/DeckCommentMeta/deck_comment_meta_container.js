import { connect } from "react-redux";
import DeckCommentMeta from "./deck_comment_meta";
import { childComments } from "../../../../../../Selectors/comments_selector";

const mapStateToProps = (state, ownProps) => ({
  childComments: childComments(state.comments, ownProps.id)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentMeta);
