import { useState } from 'react'

import Portfolio from './Portfolio.js'
import Experience from './Experience.js'
import Courses from './Courses.js'
import Contact from './Contact.js'

export default function TabNav({lenguage}) {
    const [isFocus, setIsFocus] = useState('project')

    function Section() {
        if (isFocus === 'project') {
            return <Portfolio lenguage={lenguage}/>
        } else if (isFocus === 'expertise') {
            return <Experience lenguage={lenguage}/>
        } else if (isFocus === 'education') {
            return <Courses lenguage={lenguage}/>
        } else if (isFocus === 'contact') {
            return <Contact lenguage={lenguage}/>
        }
    }

    return (
        <div className="bg-black mt-4 h-52">
            <div className="flex flex-row justify-between md:justify-around overflow-x-auto mx-2">
                <p className={`py-2 px-3 text-white hover:text-indigo-400 text-sm md:text-base cursor-pointer font-extralight ${isFocus === 'project' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('project')}>{!lenguage ? 'Proyectos' : 'Projects'}</p>
                <p className={`py-2 px-3 text-white hover:text-indigo-400 text-sm md:text-base cursor-pointer font-extralight ${isFocus === 'expertise' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('expertise')}>{!lenguage ? 'Experiencia' : 'Experience'}</p>
                <p className={`py-2 px-3 text-white hover:text-indigo-400 text-sm md:text-base cursor-pointer font-extralight ${isFocus === 'education' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('education')}>{!lenguage ? 'Educacion' : 'Education'}</p>
                <p className={`py-2 px-3 text-white hover:text-indigo-400 text-sm md:text-base cursor-pointer font-extralight ${isFocus === 'contact' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('contact')}>{!lenguage ? 'Contacto' : 'Contact'}</p>
            </div>

            <div className='mt-1 text-white'>
                <Section />
            </div>
        </div>
    )
}