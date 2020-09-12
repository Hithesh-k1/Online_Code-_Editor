import React, { Component } from "react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/htmlmixed/htmlmixed';

import '../../App.css'

export default class HtmlEditor extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
    };
  }
  render() {
    const { html } = this.state;

    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };
    return (
      <>
        <div className="code-editor html-code">
          <div className="editor-header">HTML</div>
          <CodeMirror
            value={html}
            options={{
              mode: "htmlmixed",
              ...codeMirrorOptions,
            }}
            onBeforeChange={(editor, data, html) => {
              this.setState({ html });
            }}
          />
        </div>
      </>
    );
  }
}
