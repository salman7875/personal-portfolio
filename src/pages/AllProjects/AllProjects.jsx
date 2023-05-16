import { Link } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import Project from './Project'
import './allProjects.scss'

const AllProjects = () => {
  return (
    <div className='allProjects'>
      <div className='wrapper'>
        <div className='title'>
          <Link to='/'>
            <ArrowBack className='icon' />
            <span>Salman Ansari</span>
          </Link>
          <h1>All Projects</h1>
        </div>
        <Project />
      </div>
    </div>
  )
}

export default AllProjects
