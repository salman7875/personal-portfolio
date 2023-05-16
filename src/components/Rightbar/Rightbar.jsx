import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Rightbar
