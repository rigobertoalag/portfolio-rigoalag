import { useRef } from 'react'
import Resume from './components/Resume.js'
import Techs from './components/Techs.js'
import Experience from './components/Experience.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import Courses from './components/Courses.js'
import Cover from './components/Cover.js'

function App() {
  // const topRef = useRef()
  // const resumeRef = useRef()
  // const experienceRef = useRef()
  // const portfolioRef = useRef()
  // const contactRef = useRef()

  // function handleTop() {
  //   topRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  // function handleResume() {
  //   resumeRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  // function handleExperience() {
  //   experienceRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  // function handlePortfolio() {
  //   portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  // function handleContact() {
  //   contactRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <div className="bg-black h-screen w-full">
      {/* <div ref={topRef}>
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
      </div> */}

      <Cover />
      <Resume />

    </div>
  );
}

export default App;
