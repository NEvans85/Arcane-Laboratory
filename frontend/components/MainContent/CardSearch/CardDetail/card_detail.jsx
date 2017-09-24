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
    return (
      <div className="card-details">
        <h2>Card Details</h2>
        {Object.keys(selectedCard).map(attr => {
          return (
            <label>
              {attr} :
              <p>{selectedCard.attr}</p>
            </label>
          );
        })}
      </div>
    );
  }
}

export default CardDetail;
