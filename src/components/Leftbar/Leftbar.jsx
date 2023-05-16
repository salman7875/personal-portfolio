import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { HashLink as Link } from 'react-router-hash-link'
import './leftbar.scss'
import { useState } from 'react'

const Leftbar = () => {
  const [activeLink, setActiveLink] = useState('about')

  const handleLinkClick = item => {
    setActiveLink(item)
  }

  return (
    <div className='leftbar'>
      <div className='top'>
        <h1>Salman Ansari</h1>
        <h3>Web developer</h3>
        <p>
          I built accessible, inclusive <br /> products and digital experiences
          for the web
        </p>
      </div>
      <div className='center'>
        <Link
          smooth
          to='#about'
          onClick={() => handleLinkClick('about')}
          className={`${activeLink === 'about' ? 'active-link' : ''}`}
        >
          ABOUT
        </Link>
        <Link
          smooth
          to='#skills'
          onClick={() => handleLinkClick('skills')}
          className={`${activeLink === 'skills' ? 'active-link' : ''}`}
        >
          Skills
        </Link>
        <Link
          smooth
          to='#projects'
          onClick={() => handleLinkClick('projects')}
          className={`${activeLink === 'projects' ? 'active-link' : ''}`}
        >
          PROJECTS
        </Link>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            <a href='https://github.com/salman7875' target='_blank'>
              <GitHub className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Instagram className='icon' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Twitter className='icon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mohammad-salman-ansari-6b8929253/'
              target='_blank'
            >
              <LinkedIn className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
