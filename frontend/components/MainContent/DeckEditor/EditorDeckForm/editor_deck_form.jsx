import React from "react";

class EditorDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentDeck;
  }

  render() {
    return (
      <div>
        <form>
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteDeck(this.state.id);
  }
}

export default EditorDeckForm;
