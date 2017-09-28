import React from "react";
import SearchForm from "../CardSearch/SearchForm/search_form_container";
import SearchResults from "./EditorContainers/editor_search_results_container";
import DeckBody from "./EditorContainers/editor_deck_body_container";

class DeckEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="deck-editor">
        <SearchForm />
        <SearchResults />
        {this.props.currentDeck ? <DeckBody /> : null}
      </div>
    );
  }
}

export default DeckEditor;
