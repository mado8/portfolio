import React, { Component } from "react";
import pdfFile from "../../media/content/Resume.pdf";

export default class PDFViewer extends Component {

  render() {
    return (
      <>
        <h2>PDF Viewer Component</h2>
        <object height="900px" data={pdfFile} type="application/pdf">
          <embed src={pdfFile} type="application/pdf" />
        </object>
      </>
    );
  }
}