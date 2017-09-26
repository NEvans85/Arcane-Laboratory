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
    const colors = ["white", "blue", "black", "red", "green"];
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
        <div className="color-button-box">
          {colors.map(color => (
            <button
              onClick={this.handleColorSelect(`${color}`)}
              className={`color-button-${color}`}
              selected="false"
              key={`${color}`}
              value=""
            />
          ))}
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
      e.preventDefault();
      if (e.target.classList.contains("selected")) {
        this.selectedColors = this.selectedColors.filter(el => el !== color);
        e.target.classList.remove("selected");
        // e.target.selected = "true";
      } else {
        this.selectedColors.push(color);
        e.target.classList.add("selected");
        // e.target.selected = "false";
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const colorsStr = this.selectedColors.toString();
    this.setState({ colors: colorsStr }, () => {
      const queryParams = Object.assign({}, this.state);
      this.props.search(queryParams);
      this.setState(this.defaultState);
      const colorButtons = document.getElementsByClassName("selected");
      const numButtons = colorButtons.length;
      for (var i = 0; i < numButtons; i++) {
        colorButtons[0].classList.remove("selected");
      }
    });
  }
}

export default SearchForm;
