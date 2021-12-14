import { useState } from 'react'

import Portfolio from './Portfolio.js'
import Experience from './Experience.js'
import Courses from './Courses.js'
import Contact from './Contact.js'

export default function TabNav() {
    const [isFocus, setIsFocus] = useState('project')

    function Section() {
        if (isFocus === 'project') {
            return <Portfolio />
        } else if (isFocus === 'expertise') {
            return <Experience />
        } else if (isFocus === 'education') {
            return <Courses />
        } else if (isFocus === 'contact') {
            return <Contact />
        }
    }

    return (
        <div className="bg-black mt-4 h-52">
            <div className="flex flex-row justify-between md:justify-around overflow-x-auto mx-2">
                <p className={`py-2 px-3 text-white text-sm md:text-base font-extralight ${isFocus === 'project' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('project')}>Proyectos</p>
                <p className={`py-2 px-3 text-white text-sm md:text-base font-extralight ${isFocus === 'expertise' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('expertise')}>Experiencia</p>
                <p className={`py-2 px-3 text-white text-sm md:text-base font-extralight ${isFocus === 'education' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('education')}>Educación</p>
                <p className={`py-2 px-3 text-white text-sm md:text-base font-extralight ${isFocus === 'contact' ? "border-b-2 border-indigo-600" : null} `} onClick={() => setIsFocus('contact')}>Contacto</p>
            </div>

            <div className='mt-1 text-white'>
                <Section />
            </div>
        </div>
    )
}