import TopBar from './components/TopBar.js'
import Resume from './components/Resume.js'
import Techs from './components/Techs.js'
import Experience from './components/Experience.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import Courses from './components/Courses.js'

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <TopBar />

      <div className="h-1/2 bg-gray-600">
        <p>Aqui va la portada</p>
      </div>

      <Resume />
      <Techs />
      <Experience />
      <Courses />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
