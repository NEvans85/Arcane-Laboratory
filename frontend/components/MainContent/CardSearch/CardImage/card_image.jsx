import React from "react";

class CardImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img src={this.props.imageUrl} />;
  }
}

export default CardImage;
