import React, { Component } from "react";
import { storage } from "../firebase/firebaseConfig";
import ProgressBar from "./ProgressBar";

export default class UploadButton extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      progress: 0,
    };
  }

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
    const { selectedFile } = this.state;
    const uploadTask = storage
      .ref(`savesCodes/${selectedFile.name}`)
      .put(selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("savesCodes")
          .child(selectedFile.name)
          .getDownloadURL()
          .then((url) => {
            // setUrl(url);
          });
      }
    );
  };
  render() {
    const { progress } = this.state;
    console.log(progress);
    return (
      <div>
        <ProgressBar value={progress} />

        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}
