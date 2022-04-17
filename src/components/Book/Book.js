import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "material-icons/iconfont/material-icons.css";

import "./Book.css";
import samplePDF from "../../stories/Pierre.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Page = React.forwardRef(({ pageNumber, key }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage
        pageNumber={pageNumber}
        key={pageNumber}
        width={700}
        renderTextLayer={false}
      />
    </div>
  );
});

export const Book = ({}) => {
  const book = useRef();
  const [numPages, setNumPages] = useState(null);

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      book.current.pageFlip().flipPrev();
    }
    if (event.keyCode === 39) {
      book.current.pageFlip().flipNext();
    }
  };

  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(pdf?.numPages);
    document.addEventListener("keydown", handleKeyDown, false);
  };

  return (
    <div className="book-container">
      <div
        ignore="1"
        className="turn-btn"
        onClick={() => {
          book.current.pageFlip().flipPrev();
        }}
      >
        <div className={`material-icons md-48`}>keyboard_arrow_left</div>
      </div>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <HTMLFlipBook width={700} height={900} ref={book}>
          {[...Array(numPages)].map((page, i) => (
            <Page pageNumber={i + 1} key={i + 1} />
          ))}
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
