import React from "react";
import SearchForm from "./SearchForm/search_form_container";
import SearchResults from "./SearchResults/search_results_container";
import CardDetail from "./CardDetail/card_detail_container";
import CardImage from "./CardImage/card_image_container";

class CardSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-search-component">
        <SearchForm />
        <SearchResults />
        <CardImage />
        <CardDetail />
      </div>
    );
  }
}

export default CardSearch;
