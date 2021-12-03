import { useRef } from 'react'
import Resume from './components/Resume.js'
import Techs from './components/Techs.js'
import Experience from './components/Experience.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import Courses from './components/Courses.js'
import Cover from './components/Cover.js'

function App() {
  const topRef = useRef()
  const resumeRef = useRef()
  const experienceRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()

  function handleTop() {
    topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleResume() {
    resumeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleExperience() {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handlePortfolio() {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContact() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="h-screen">
      <div className="flex h-12 w-full items-center justify-center fixed bg-blue-400 shadow-lg">
        <p className="cursor-pointer text-white hover:text-green-200" onClick={handleTop}>Inicio</p>
        <div className="flex flex-row-reverse w-10/12">
          <p className="mr-4 text-white hover:text-green-200 cursor-pointer" onClick={handleContact}>Contacto</p>
          <p className="mr-4 text-white hover:text-green-200 cursor-pointer" onClick={handlePortfolio}>Proyectos</p>
          <p className="mr-4 text-white hover:text-green-200 cursor-pointer" onClick={handleExperience}>Experiencia</p>
          <p className="mr-4 text-white hover:text-green-200 cursor-pointer" onClick={handleResume}>Resumen</p>
        </div>
      </div>

      <div className="h-3/4 bg-white pt-12" ref={topRef}>
        <Cover />
      </div>

      <div ref={resumeRef}>
        <Resume />
      </div>

      <Techs />

      <div ref={experienceRef}>
        <Experience />
      </div>

      <Courses />

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

    </div>
  );
}

export default App;
