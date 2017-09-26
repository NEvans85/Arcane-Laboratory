import React from "react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return <div>{this.props.title}</div>;
  }
}

export default CardList;
