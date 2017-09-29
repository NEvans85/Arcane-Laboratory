import React from "react";

class EditorDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentDeck;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div className="editor-form-container">
        <form className="editor-form" onSubmit={this.handleSubmit}>
          <label>Deck Title:</label>
          <input
            onChange={this.updateInput("title")}
            type="text"
            placeholder="Deck Title"
            value={this.state.title}
          />

          <label>Format:</label>
          <select
            value={this.state.format}
            onChange={this.updateInput("format")}
          >
            {["Casual", "Standard", "Modern", "Legacy"].map(format => (
              <option value={format}>{format}</option>
            ))}
          </select>

          <label>Deck Description:</label>
          <textarea
            className="editor-description"
            onChange={this.updateInput("description")}
            placeholder="Deck Description"
          >
            {this.state.description}
          </textarea>

          <div className="editor-form-action-buttons">
            <button>Update Deck</button>
            <button onClick={this.handleDelete}>Delete Deck</button>
          </div>
        </form>
      </div>
    );
  }
  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateDeck(this.state);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDeck(this.state.id);
    this.props.history.push(
      `/users/${this.props.currentDeck.creator.id}/decks`
    );
  }
}

export default EditorDeckForm;
