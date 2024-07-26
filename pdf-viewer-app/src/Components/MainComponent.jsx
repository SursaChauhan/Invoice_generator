import React from 'react'
import PdfComponenet from './pdfComponenet'
import Invoice from './Invoice'
import './main.css'
import InvoiceSummary from './InvoiceSummary'
const MainComponent = () => {
  return (
    <div className='main-container'>
        <PdfComponenet/>
        <Invoice/>
        {/* <InvoiceSummary/> */}
    </div>
  )
}

export default MainComponent