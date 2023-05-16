import { useEffect, useRef, useState } from 'react'
import { ArrowForward } from '@mui/icons-material'
import './about.scss'

const About = () => {
  const aboutRef = useRef()
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

    observer.observe(aboutRef.current)
  }, [])

  return (
    <div
      className={`about ${isVisible ? 'active-a' : 'inactive-a'}`}
      ref={aboutRef}
      id='about'
    >
      <h1>About</h1>
      <p>
        I am <span>Salman Ansari</span>, a passionate <span>Web Developer</span>{' '}
        with a drive for creativity, innovation, and problem-solving. This
        website serves as a showcase of my skills, projects, and achievements,
        providing you with a glimpse into my journey and what I have to offer.
      </p>
      <p>
        I am looking to create my career in the domain of Web Development. I
        have the understanding and hands-on experience in web development and
        software engineering principles and would like to be part of an
        organization where i could grow my skillset along with being beneficial
        to the firm.
      </p>
      <p>
        Thank you for visiting my portfolio website, and I hope you enjoy
        exploring my work!
      </p>
      <div to='/pdf' className='resume'>
        <a href='mailto:asalman7875@gmail.com'>Contact me</a>
        <ArrowForward className='icon' />
      </div>
    </div>
  )
}

export default About
