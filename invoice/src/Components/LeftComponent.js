import React from 'react';
import { Document, Page } from 'react-pdf';
import './LeftComponent.css';
import { GlobalWorkerOptions } from 'pdfjs-dist';
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.js'; 


const LeftComponent = () => {
    GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.15.349/pdf.worker.min.js'; // Example CDN URL
 
  const pdfUrl = 'https://docs.google.com/document/d/1AqjwNVdSkwXt8HbsQ34KUggSNO_sxaIEMZ-KUIKuAW0/edit?usp=sharing'; // Update with the path to your dummy PDF

  return (
    <div className="left-container">
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  </div>
  );
};

export default LeftComponent;
