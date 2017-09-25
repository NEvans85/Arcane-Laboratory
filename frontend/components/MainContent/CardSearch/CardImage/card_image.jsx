import React from "react";

class CardImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img className="search-image" src={this.props.imageUrl} />;
  }
}

export default CardImage;
