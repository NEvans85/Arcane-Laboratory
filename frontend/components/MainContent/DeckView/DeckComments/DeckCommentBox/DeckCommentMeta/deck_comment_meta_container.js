import { connect } from "react-redux";
import DeckCommentMeta from "component_path";
import { childComments } from "../../../../../../Selectors/comments_selector";

const mapStateToProps = (state, ownProps) => ({
  childComments: childComments(state.comments, ownProps.id)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentMeta);
