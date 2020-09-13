import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "../../App.css";

export default class JavascriptEditor extends Component {
  constructor() {
    super();
    this.state = {
      js: "",
    };
  }
  render() {
    const { js } = this.state;
    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
      <div className="code-editor js-code">
        <div className="editor-header">JavaScript</div>
        <CodeMirror
          value={js}
          options={{
            mode: "javascript",
            ...codeMirrorOptions,
          }}
          onBeforeChange={(editor, data, js) => {
            this.setState({ js }, () => {
              this.props.onJsChange(js);
            });
          }}
        />
      </div>
    );
  }
}
