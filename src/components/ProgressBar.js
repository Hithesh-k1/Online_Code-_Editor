import React, { Component } from "react";
import "./styleSheet/progressBar.css";

export default class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      style: {},
    };
  }

  componentDidUpdate = () => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${this.props.value}%`,
      };

      this.setState({ style: newStyle });
    }, 200);
  };

  render() {
    return (
      <div className="progress">
        <div className="progress-done" style={this.state.style}>
          {this.props.value}%
        </div>
      </div>
    );
  }
}
