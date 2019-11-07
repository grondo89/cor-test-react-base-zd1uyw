import React, { Component } from "react";
const wordCount = require("../logic.js");

export default class GridCheckerContainer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    let foundWords = wordCount(this.props.grid, this.props.name);
    this.props.grid &&
      this.setState({
        counter: foundWords
      });
  }

  componentDidUpdate() {
    let foundWords = wordCount(this.props.grid, this.props.name);
    this.props.grid && this.state.counter !== foundWords
      ? this.setState((state, props) => ({
          counter: foundWords
        }))
      : null;
  }

  render() {
    return this.state.counter && this.state.counter > 0 ? (
      <div>
        <div>
          LA PALABRA '' {this.props.name} '' FUE ENCONTRADA {this.state.counter}{" "}
          VECES EN LA GRILLA
        </div>
      </div>
    ) : (
      <div>
        LA PALABRA '' {this.props.name} '' NO FUE ENCONTRADA EN LA GRILLA
      </div>
    );
  }
}
