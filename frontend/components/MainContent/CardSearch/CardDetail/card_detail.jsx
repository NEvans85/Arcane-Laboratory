import React from "react";

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedCard = this.props.selectedCard;
    Object.keys(selectedCard).forEach(key => {
      if (selectedCard[key] == null) {
        delete selectedCard[key];
      }
    });
    delete selectedCard["id"];
    delete selectedCard["image_url"];
    return (
      <div className="card-details">
        <h2>Card Details</h2>
        <ul>
          {Object.keys(selectedCard).map(attr => {
            return (
              <li key={attr}>
                {this.capitalize(attr)} : {selectedCard[attr]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}

export default CardDetail;
