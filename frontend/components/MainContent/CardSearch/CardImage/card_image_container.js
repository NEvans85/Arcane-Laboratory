import { connect } from "react-redux";
import CardImage from "./card_image";

const mapStateToProps = state => {
  let imageUrl;
  if (state.cards.selectedCard) {
    imageUrl = state.cards.selectedCard.image_url;
  } else {
    imageUrl = "";
  }
  return {
    imageUrl: imageUrl
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardImage);
