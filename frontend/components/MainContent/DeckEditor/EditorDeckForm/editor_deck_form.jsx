import React from "react";

class EditorDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentDeck;
  }

  render() {
    console.log(this.props.currentDeck);
    return (
      <div className="editor-form-container">
        <form className="editor-form" onSubmit={this.handleSubmit}>
          <label>
            Deck Title:
            <input
              onChange={this.updateInput("title")}
              type="text"
              placeholder="Deck Title"
              value={this.state.title}
            />
          </label>
          <label>
            Format:
            <select
              value={this.state.format}
              onChange={this.updateInput("format")}
            >
              {["Casual", "Standard", "Modern", "Legacy"].map(format => (
                <option value={format}>{format}</option>
              ))}
            </select>
          </label>
          <label>
            Deck Description:
            <input
              className="editor-description"
              onChange={this.updateInput("description")}
              type="textarea"
              placeholder="Deck Description"
              value={this.state.description}
            />
          </label>
          <input type="submit" value="Update Deck" />
        </form>
        <button onClick={this.handleDelete}>Delete Deck</button>
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
  }
}

export default EditorDeckForm;
