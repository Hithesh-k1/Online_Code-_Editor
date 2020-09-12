import React, { Component } from "react";
import '../App.css'



export default class output extends Component {
  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}

            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    return (
     <>
          <section className="result">
            <iframe title="result" className="iframe" ref="iframe" />
          </section>
      </>
    );
  }
}
