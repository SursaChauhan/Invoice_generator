import React from 'react'
import PdfComponenet from './pdfComponenet'
import Invoice from './Invoice'
import './main.css'
const MainComponent = () => {
  return (
    <div className='main-container'>
        <PdfComponenet/>
        <Invoice/>
    </div>
  )
}

export default MainComponent