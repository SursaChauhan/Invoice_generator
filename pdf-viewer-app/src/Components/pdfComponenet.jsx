import React from 'react'
import './pdf.css'
import {Viewer,Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
const PdfComponenet = () => {

    const pdfFile = 'https://sursachauhan.github.io/pdf_generate/Visily-Export_24-02-2024_10-45.pdf';
    const newplugin = defaultLayoutPlugin();
  return (
    <div className='pdf-Container'>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'>

{
    pdfFile && <Viewer fileUrl={pdfFile} plugins={[newplugin]}></Viewer>
}
        </Worker>
    </div>
  )
}

export default PdfComponenet;