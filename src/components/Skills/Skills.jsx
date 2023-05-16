import { useEffect, useRef, useState } from 'react'
import { skills } from '../../data'
import { Link } from 'react-router-dom'
import './skills.scss'
import { ArrowForward } from '@mui/icons-material'

const Skills = () => {
  const mainRef = useRef()
  const [main, setMain] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setMain(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(mainRef.current)
  })

  return (
    <div
      className={`skills ${main ? 'active-s' : 'inactive-s'}`}
      ref={mainRef}
      id='skills'
    >
      <h2>Technologies</h2>
      <h1>Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <img src={skill.icon} className='icon' />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <Link to='/pdf' className='resume'>
        <span>View Full Resume</span>
        <ArrowForward className='icon' />
      </Link>
    </div>
  )
}

export default Skills
