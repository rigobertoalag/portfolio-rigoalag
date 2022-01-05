import { useState } from 'react'
import Resume from './components/Resume.js'
import Cover from './components/Cover.js'
import TabNav from './components/TabNav.js'

function App() {
  const [translate, setTranslate] = useState(false)
  return (
    <div className="bg-black h-full w-full">
      <Cover />
      {
        translate ? <button onClick={() => setTranslate(false)} className='text-white absolute top-4 ml-4 lg:fixed'><img
          alt="ES"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg"
        />ES</button> :
          <button onClick={() => setTranslate(true)} className='text-white absolute top-4 ml-4 lg:fixed'>
            <img
              alt="EN"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            />EN</button>
      }
      <Resume lenguage={translate} />
      <TabNav lenguage={translate} />
    </div>
  );
}

export default App;
