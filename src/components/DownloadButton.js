

import React, { Component } from "react";

export default class DownloadButton extends Component {
  TextFile = () => {
      console.log(this.props.value)
    const element = document.createElement("a");
    const file = new Blob([this.props.html, this.props.css], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  render() {
    return (
      <div>
        {/* <input id='myInput'></input> */}
        <button onClick={this.TextFile}>download</button>
      </div>
    );
  }
}
