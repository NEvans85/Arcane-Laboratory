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
      cmc: "",
      colors: "",
      page: 0
    };
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <h2>Card Search</h2>
        <label>
          Card Name
          <input
            onChange={this.updateInput("name")}
            type="text"
            placeholder="Card Name"
            value={this.state.name}
          />
        </label>
        <label>
          Card Type
          <input
            onChange={this.updateInput("type")}
            type="text"
            placeholder="Ex: angel, legendary, creature"
            value={this.state.type}
          />
        </label>
        <label>
          Converted Mana Cost
          <input
            onChange={this.updateInput("cmc")}
            type="text"
            placeholder="Ex: 2, 7, 16"
            value={this.state.cmc}
          />
        </label>
        <label>
          Set
          <input
            onChange={this.updateInput("set")}
            type="text"
            placeholder="Ex: kld, emn, rav"
            value={this.state.set}
          />
        </label>
        <div className="color-radio-box">
          <input
            type="checkbox"
            onChange={this.handleColorSelect("white")}
            className="white-color-search"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("blue")}
            className="blue-color-search"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("black")}
            className="black-color-search"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("red")}
            className="red-color-search"
            value=""
          />
          <input
            type="checkbox"
            onChange={this.handleColorSelect("green")}
            className="green-color-search"
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
    console.log(this.selectedColors);
    const colorsStr = this.selectedColors.toString();
    console.log(colorsStr);
    this.setState({ colors: colorsStr });
    console.log(this.state.colors);
    const queryParams = Object.assign({}, this.state);
    console.log(queryParams);
    this.props.search(queryParams);
    this.setState(this.defaultState);
  }
}

export default SearchForm;
