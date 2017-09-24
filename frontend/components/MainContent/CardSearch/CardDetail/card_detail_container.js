import { connect } from "react-redux";
import CardDetail from "./card_detail";

const mapStateToProps = state => ({
  selectedCard: state.cards.selectedCard
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
