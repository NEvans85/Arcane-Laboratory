import React from "react";
import SearchForm from "../CardSearch/SearchForm/search_form_container";
import SearchResults from "./EditorContainers/editor_search_results_container";
import DeckBody from "./EditorContainers/editor_deck_body_container";
import EditorDeckForm from "./EditorDeckForm/editor_deck_form_container";

class DeckEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  }

  componentWillUnmount() {
    this.props.resetSearchResults();
  }

  render() {
    console.log(this.props);
    return (
      <div className="deck-editor">
        <SearchForm />
        <SearchResults />
        {this.props.currentDeck ? (
          <div>
            <EditorDeckForm />
            <DeckBody />
          </div>
        ) : null}
      </div>
    );
  }
}

export default DeckEditor;
