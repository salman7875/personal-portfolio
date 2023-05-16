import Leftbar from './components/Leftbar/Leftbar'
import Rightbar from './components/Rightbar/Rightbar'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PdfViewer from './pages/Pdf/PdfViewer'
import AllProjects from './pages/AllProjects/AllProjects'
import pdf from './pages/Pdf/salman-resume.pdf'

const App = () => {
  const Error = () => {
    return <div>Something Went Wrong!</div>
  }

  const Root = () => {
    return (
      <div className='mainContainer'>
        <div className='wrapper'>
          <Leftbar />
          <Rightbar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    { path: '/', element: <Root />, errorElement: <Error /> },
    { path: '/all-projects', element: <AllProjects /> },
    { path: '/pdf', element: <PdfViewer pdf={pdf} /> }
  ])

  return <RouterProvider router={router} />
}

export default App
