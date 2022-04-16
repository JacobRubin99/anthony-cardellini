import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "material-icons/iconfont/material-icons.css";

import "./Book.css";
import samplePDF from "../../stories/sample5.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 300;
const height = 500;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

export const Book = ({}) => {
  const book = useRef();

  const handleKeyDown = (event) => {
    console.log("inside handlekeydown");
    if (event.keyCode === 37) {
      book.current.pageFlip().flipPrev();
    }
    if (event.keyCode === 39) {
      book.current.pageFlip().flipNext();
    }
  };
  document.addEventListener("keydown", handleKeyDown, false);

  return (
    <div className="book-container">
      <div
        ignore="1"
        className="turn-btn"
        onClick={() => book.current.pageFlip().flipPrev()}
      >
        <div className={`material-icons md-48`}>keyboard_arrow_left</div>
      </div>
      <Document
        file={samplePDF}
        options={{
          cMapPacked: true,
          cMapUrl: "cmaps/",
          verbosity: pdfjs.VerbosityLevel.ERRORS,
        }}
      >
        <HTMLFlipBook
          width={width}
          height={height}
          usePortrait={false}
          mobileScrollSupport={true}
          ref={book}
        >
          <Page pageNumber={1} />
          <Page pageNumber={2} />
          <Page pageNumber={3} />
          <Page pageNumber={4} />
          <Page pageNumber={5} />
          <Page pageNumber={6} />
          <Page pageNumber={7} />
        </HTMLFlipBook>
      </Document>
      <div
        ignore="1"
        className="turn-btn"
        onClick={() => book.current.pageFlip().flipNext()}
      >
        <div className={`material-icons md-48`}>keyboard_arrow_right</div>
      </div>
    </div>
  );
};

export default Book;
