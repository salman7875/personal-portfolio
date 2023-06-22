import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Leftbar from './components/Leftbar/Leftbar'
// import Rightbar from './components/Rightbar/Rightbar'
// import PdfViewer from './pages/Pdf/PdfViewer'
// import AllProjects from './pages/AllProjects/AllProjects'
// import pdf from './pages/Pdf/salman-resume.pdf'
import './App.scss'

const LeftBar = lazy(() => import('./components/Leftbar/Leftbar'))
const Rightbar = lazy(() => import('./components/Rightbar/Rightbar'))
const PdfViewer = lazy(() => import('./pages/Pdf/PdfViewer'))
const AllProjects = lazy(() => import('./pages/AllProjects/AllProjects'))
const pdf = lazy(() => lazy(() => import('./pages/Pdf/salman-resume.pdf')))

const App = () => {
  const Error = () => {
    return <div>Something Went Wrong!</div>
  }

  const Root = () => {
    return (
      <div className='mainContainer'>
        <div className='wrapper'>
          <LeftBar />
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
