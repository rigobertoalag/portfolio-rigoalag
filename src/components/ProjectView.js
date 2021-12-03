import { useState, useEffect } from 'react'

import projects from '../json/projects.js'

export default function ProjectView({ project }) {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        if (project === 1) {
            setProjectData(projects.filter(p => p.id === project))
        } else if (project === 2) {
            setProjectData(projects.filter(p => p.id === project))
        } else if (project === 3) {
            setProjectData(projects.filter(p => p.id === project))
        } else if (project === 4) {
            setProjectData(projects.filter(p => p.id === project))
        }
    }, [project])

    return (
        <>
            {
                projectData.map((p) => (
                    <div className="flex flex-col justify-center items-center h-full" key={p.id}>
                        <p className="font-semibold text-xl mt-4 text-green-600">{p.title}</p>
                        <div className="flex flex-row h-full">
                            <div className="w-1/2 h-full ml-4 text-justify">
                                <p className="text-lg font-semibold pb-4 text-green-600">Descripcion:</p>
                                <p className="text-green-900">
                                    {p.description}
                                </p>
                                <p className="text-lg font-semibold mt-4 mb-2 text-green-600">Tecnologias</p>
                                <div className="grid grid-cols-4 gap-1">
                                    {
                                        p.techs.map((t) => (
                                            <p key={t.id} className={`py-2 px-4 ${t.color} rounded-full flex flex-row ${t.txtColor} shadow items-center text-xs`}><img className="h-7 w-7 mr-2" src={t.img} alt="react" />{t.name}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 h-full items-center mt-4">
                                <div className=" w-4/5 h-full">
                                    <img src={p.img} alt="test" className="w-full my-4" />
                                </div>
                                <div className="flex flex-row">
                                    {
                                        p.id === 1 ? (
                                            <a href={p.url} target="_blank" rel="noreferrer" className="p-4 mr-4 text-center bg-indigo-600 rounded-xl text-white flex flex-row justify-around shadow mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Ver Snack en Expo
                                            </a>
                                        ) : null
                                    }
                                    <a href={p.gitUrl} target="_blank" rel="noreferrer" className="p-4 text-center bg-indigo-600 rounded-xl text-white flex flex-row justify-around shadow mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Ver en GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}