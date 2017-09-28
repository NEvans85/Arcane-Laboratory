import { connect } from "react-redux";
import DeckCommentFooter from "./deck_comment_footer";

const mapStateToProps = (state, ownProps) => ({
  comment: state.comments[ownProps.id]
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeckCommentFooter);
