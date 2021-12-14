import { useState } from 'react'
import projects from '../json/projects.js'
import Footer from './Footer.js'

export default function Portfolio({ lenguage }) {
    const [isClick, setIsClick] = useState(false)

    return (
        <div className='flex flex-col  bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2'>{!lenguage ? 'Proyectos' : 'Projects'}</p>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    projects.map((p) => (
                        <div className='w-72 sm:w-80 md:w-80 border-2 rounded border-gray-800 my-2' key={p.id}>
                            <div className='w-full'>
                                {
                                    !isClick ? (<img src={process.env.PUBLIC_URL + p.img} alt={p.title} className="object-contain" onClick={() => setIsClick(true)} />) : (
                                        <div className='bg-indigo-600 bg-opacity-60 w-full h-52 flex flex-row justify-center items-center' onClick={() => setIsClick(false)}>
                                            <a href={p.gitUrl} target="_blank" rel="noreferrer"><div className='p-2 ring-2 ring-indigo-400 rounded-lg mx-4 flex flex-row'><img src={process.env.PUBLIC_URL + "/img/techs/github-w.png"} alt="gh" className='h-6 w-6 mr-1' />GitHub</div></a>
                                            {
                                                p.preview ? (<a href={p.url} target="_blank" rel="noreferrer"><div className='p-2 ring-2 ring-indigo-400 rounded-lg flex flex-row'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    Preview
                                                </div>
                                                </a>) : null
                                            }
                                        </div>)
                                }
                            </div>
                            <div className='w-full my-1 p-2'>
                                <p className="text-xs text-indigo-500 mt-2 ml-1 italic">{p.techs}</p>
                                {!lenguage ? <p className='text-2xl mb-1 ml-1 font-light'>{p.titleES}</p> : <p className='text-2xl mb-1 ml-1 font-light'>{p.titleEN}</p>}
                                {!lenguage ? <p className='text-sm text-gray-300 font-extralight text-justify mx-1'>{p.descriptionES}</p> : <p className='text-sm text-gray-300 font-extralight text-justify mx-1'>{p.descriptionEN}</p>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}