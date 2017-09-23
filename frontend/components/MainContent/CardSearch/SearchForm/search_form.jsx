import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorSelect = this.handleColorSelect.bind(this);
  }

  defaultState() {
    return {
      name: "",
      set: "",
      type: "",
      cmc: null,
      colors: [],
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
            onInput={handleColorSelect("white")}
            className="white-color-search"
          />
          <input
            type="checkbox"
            onInput={handleColorSelect("blue")}
            className="blue-color-search"
          />
          <input
            type="checkbox"
            onInput={handleColorSelect("black")}
            className="black-color-search"
          />
          <input
            type="checkbox"
            onInput={handleColorSelect("red")}
            className="red-color-search"
          />
          <input
            type="checkbox"
            onInput={handleColorSelect("green")}
            className="green-color-search"
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
      let colors = this.state.colors;
      if (e.target.checked) {
        colors.push(color);
      } else {
        colors = colors.filter(el => el !== color);
      }
      this.setState({ colors: colors });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const colorsStr = state.colors.toString();
    this.setState({ colors: colorsStr });
    const queryParams = Object.assign({}, this.state);
    this.props.search(queryParams);
    this.setState(this.defaultState);
  }
}

export default SearchForm;
