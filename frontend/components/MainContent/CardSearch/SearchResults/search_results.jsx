import React from "react";
import { findKey } from "lodash";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.handleResultClick = this.handleResultClick.bind(this);
  }

  render() {
    const cards = this.props.cards;
    const uniqCardKeys = [];
    const uniqCardNames = [];
    Object.keys(cards).forEach(key => {
      if (cards[key].image_url && !uniqCardNames.includes(cards[key].name)) {
        uniqCardNames.push(cards[key].name);
        uniqCardKeys.push(key);
      }
    });
    const keysSortedByName = uniqCardKeys.sort((a, b) => {
      const aName = cards[a].name.toUpperCase();
      const bName = cards[b].name.toUpperCase();
      if (aName < bName) {
        return -1;
      }
      return 1;
    });
    return (
      <div className="search-results search-component">
        <ul>
          {uniqCardKeys.map(key => {
            return (
              <li key={key} id={key} onClick={this.handleResultClick}>
                {cards[key].name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleResultClick(e) {
    this.props.cardDetails(e.target.id);
  }
}

export default SearchResults;
