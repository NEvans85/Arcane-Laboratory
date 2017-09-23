import React from "react";
import { findKey } from "lodash";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const cards = this.props.cards;
    const names = Object.keys(cards).map(key => cards[key].name);
    const uniqNames = Array.from(new Set(names)).sort();
    const uniqNameKeys = uniqNames.map(name => findKey(cards, { name: name }));
    return (
      <div className="search-results">
        <ul>
          {uniqNameKeys.map(key => {
            return (
              <li key={key} id={key}>
                {cards[key].name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
