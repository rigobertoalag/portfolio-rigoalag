import projects from '../json/projects.js'
import Footer from './Footer.js'

export default function Portfolio() {
    return (
        <div className='flex flex-col  bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2'>Proyectos</p>
            <div className='grid grid-cols-2 gap-4'>
                {
                    projects.map((p) => (
                        <div className='w-72 sm:w-80 md:w-80 border-2 rounded border-gray-800 my-2' key={p.id}>
                            <div className='w-full'>
                                <img src={process.env.PUBLIC_URL + p.img} alt={p.title} className="object-contain" />
                            </div>
                            <div className='w-full my-1 p-2'>
                                <p className="text-xs text-indigo-500 mt-2 ml-1 italic">{p.techs}</p>
                                <p className='text-2xl mb-1 ml-1 font-light'>{p.title}</p>
                                <p className='text-sm text-gray-300 font-extralight text-justify mx-1'>{p.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}