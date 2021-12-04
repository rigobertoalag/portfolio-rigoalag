import { useState } from 'react'
import ProjectView from '../components/ProjectView'
import projects from '../json/projects.js'

export default function Portfolio() {
    const [project, setProject] = useState(1)
    return (
        <div className="bg-gray-100 w-full">
            <div className="flex justify-center py-10 text-4xl font-bold">
                <p className="text-green-600">Proyectos - Portafolio</p>
            </div>
            <div className="w-full bg-gray-200 flex flex-row shadow-lg pb-6 rounded-xl">
                <div className="w-1/5 flex flex-col items-center justify-center mx-2">
                    {
                        projects.map((p) => (
                            <div key={p.id} className="h-16 sm:h-14 w-full bg-blue-700 flex items-center justify-center shadow-lg mb-2 rounded-lg" onClick={() => setProject(p.id)}>
                                <p className="cursor-pointer text-green-50 sm:text-xs sm:mx-2 text-center">{p.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-4/5">
                    <div className="bg-gray-200 border-l-4 border-gray-300 h-full">
                        <ProjectView project={project} />
                    </div>
                </div>

            </div>
        </div>
    )
}