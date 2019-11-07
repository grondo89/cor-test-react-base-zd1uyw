import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Data from "./assets/resources.json";
import GridCheckerContainer from "./Containers/GridCheckerContainer";
import Controller from "./Components/Controller";
import Row from "./Components/Row";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "OIE",
      grid: [],
      newInput: ""
    };
  }

  componentDidMount() {
    let randNum = Math.floor(Math.random() * 3);
    let grid = Data.resources[randNum];
    this.setState({
      grid
    });
  }

  handleInput = e => {
    var input = e.target.value;
    this.setState({ newInput: input });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newInput)
      this.setState({
        name: this.state.newInput.toUpperCase(),
        newInput: ""
      });
  };

  render() {
    return this.state.grid && this.state.grid.length > 0 ? (
      <div className={"container"}>
      <div className={"header"}>
      <h1> RESOLVEDOR DE SOPA DE LETRAS</h1>
      </div>
        {this.state.grid.map(row => (
          <div className={"grid"}>
            <Row gridRow={row} />
          </div>
        ))}
        <div className={"controller"}>
          <div>
            <Controller
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              newInput={this.state.newInput}
            />
          </div>
          <div>
            <GridCheckerContainer
              grid={this.state.grid}
              name={this.state.name}
            />
          </div>
        </div>
      </div>
    ) : (
      <p>LOADING GRID</p>
    );
  }
}

render(<App />, document.getElementById("root"));
