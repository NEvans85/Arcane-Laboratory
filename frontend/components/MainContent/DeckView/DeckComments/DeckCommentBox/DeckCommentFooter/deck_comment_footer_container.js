import { connect } from "react-redux";
import DeckCommentFooter from "./deck_comment_footer";

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentFooter);
