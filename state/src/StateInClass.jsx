
import React, { Component } from "react";
import "./StateInClass.css";

export default class StateInClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="game-container">
        <h1>GAME (:)</h1>
        <hr />

        <h1 className="count">Count: {this.state.count}</h1>

        <button className="add-btn"
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>

        <button className="sub-btn"
          onClick={() => this.setState({ count: this.state.count - 1 })}>
          Sub
        </button>

        <button className="reset-btn"
          onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}
