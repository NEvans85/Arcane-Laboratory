import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();
    this.selectedColors = [];

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorSelect = this.handleColorSelect.bind(this);
  }

  defaultState() {
    return {
      name: "",
      set: "",
      type: "",
      text: "",
      cmc: "",
      colors: "",
      page: 0
    };
  }

  render() {
    return (
      <form
        className="search-form search-component"
        onSubmit={this.handleSubmit}
      >
        <h2>Card Search</h2>
        <label>Card Name: </label>
        <input
          onChange={this.updateInput("name")}
          type="text"
          placeholder="Card Name"
          value={this.state.name}
        />

        <label>Card Type: </label>
        <input
          onChange={this.updateInput("type")}
          type="text"
          placeholder="Ex: angel, legendary, creature"
          value={this.state.type}
        />

        <label>Text Includes: </label>
        <input
          onChange={this.updateInput("text")}
          type="text"
          placeholder="Ex: vigilance, flying"
          value={this.state.text}
        />

        <label>Converted Mana Cost:</label>
        <input
          onChange={this.updateInput("cmc")}
          type="text"
          placeholder="Ex: 2, 7, 16"
          value={this.state.cmc}
        />

        <label>Set</label>
        <input
          onChange={this.updateInput("set")}
          type="text"
          placeholder="Ex: kld, emn, rav"
          value={this.state.set}
        />

        <label>Color:</label>
        <div className="color-checkbox-box">
          <input
            type="checkbox"
            onChange={this.handleColorSelect("white")}
            className="color-checkbox-white"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("blue")}
            className="color-checkbox-blue"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("black")}
            className="color-checkbox-black"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("red")}
            className="color-checkbox-red"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("green")}
            className="color-checkbox-green"
            value=""
          />
        </div>
        <input type="submit" value="Search" />
      </form>
    );
  }
  updateInput(key) {
    return e => {
      this.setState({ [key]: e.target.value });
    };
  }

  handleColorSelect(color) {
    return e => {
      if (e.target.checked) {
        this.selectedColors.push(color);
      } else {
        this.selectedColors = this.selectedColors.filter(el => el !== color);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const colorsStr = this.selectedColors.toString();
    this.setState({ colors: colorsStr });
    const queryParams = Object.assign({}, this.state);
    this.props.search(queryParams);
    this.setState(this.defaultState);
  }
}

export default SearchForm;
