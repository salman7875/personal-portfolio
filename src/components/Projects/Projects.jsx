import { useEffect, useRef, useState } from 'react'
import { projectData } from '../../data'
import { ArrowForward } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './projects.scss'

const Projects = () => {
  const projectRef = useRef()
  const [isVisible, setIsVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(projectRef.current)
  }, [])

  return (
    <div
      className={`projects ${isVisible ? 'active-p' : 'inactive-p'}`}
      ref={projectRef}
      id='projects'
    >
      <h1>Projects</h1>
      {projectData.map(data => (
        <Link className='card' to={data.link} target='_blank' key={data.id}>
          <img src={data.img} alt={`${data.title} img`} />
          <div className='right'>
            <h4>{data.title}</h4>
            <p>{data.desc.substring(0, 240).concat('...')}</p>

            <div className='bottom'>
              {data.techStack.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
      <Link to='/all-projects' className='resume'>
        <span>View All Projects</span>
        <ArrowForward className='icon' />
      </Link>
    </div>
  )
}

export default Projects
