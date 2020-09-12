import React from "react";
import "./App.css";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


import HtmlEditor from "./components/codeEditor.js/htmlEditor";
import CssEditor from "./components/codeEditor.js/cssEditor";
import JavascriptEditor from "./components/codeEditor.js/javascriptEditor";
import Output from "./components/output";

function App() {
  return (
    <div className="App">
      <section className="playground">
        <HtmlEditor />
        <CssEditor />
        <JavascriptEditor />
        <Output />
      </section>
    </div>
  );
}

export default App;
