import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "material-icons/iconfont/material-icons.css";

import "./Book.css";
import samplePDF from "../../stories/sample5.pdf";
import FlipData from "./data.json";
import TextImg from "../../images/img1.JPG";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 640;
const height = 640;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

export const Book = ({}) => {
  const book = useRef();
  const { flipData } = FlipData;

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

      <HTMLFlipBook usePortrait={false} width={480} height={640} ref={book}>
        {flipData.map((el, i) => (
          <div className="demoPage" key={el.id}>
            <img src={TextImg} alt="" />
          </div>
        ))}
      </HTMLFlipBook>

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
