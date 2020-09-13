import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/css/css";
import "../../App.css";


export default class CssEditor extends Component {
  constructor() {
    super();
    this.state = {
      css: "",
    };
  }
  render() {
    const { css } = this.state;

    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };
    return (
      <div className="code-editor css-code">
        <div className="editor-header">CSS</div>
        <CodeMirror
          value={css}
          options={{
            mode: "css",
            ...codeMirrorOptions,
          }}
          onBeforeChange={(editor, data, css) => {
            this.setState({ css }, () => {
              this.props.onCssChange(css);
            });
          }}
        />
      </div>
    );
  }
}
