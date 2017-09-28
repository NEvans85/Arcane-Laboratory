import React from "react";
import SearchForm from "../CardSearch/SearchForm/search_form_container";
import SearchResults from "./SearchResults/editor_search_results_container";

class DeckEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  render() {
    return (
      <div className="deck-editor">
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default DeckEditor;
