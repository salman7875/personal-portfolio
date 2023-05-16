import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import './pdf.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Enable PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page

  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage (offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage () {
    changePage(-1)
  }

  function nextPage () {
    changePage(1)
  }

  return (
    <div className='pdfContainer'>
      <Document
        file={pdf}
        options={{ workerSrc: '/pdf.worker.js' }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page className='pdfPage' pageNumber={pageNumber} />
      </Document>
      <div className='btn'>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <Link className='btn-b' to='/'>
          Back
        </Link>
        <button
          type='button'
          className='btn-p'
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type='button'
          className='btn-n'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PdfViewer
