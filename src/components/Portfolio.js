import projects from '../json/projects.js'
import Footer from './Footer.js'

export default function Portfolio() {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl font-extralight mb-2'>Proyectos</p>
            {
                projects.map((p) => (
                    <div className='w-72 border-2 rounded border-gray-900 my-2' key={p.id}>
                        <div className='w-full h-full'>
                            <img src={process.env.PUBLIC_URL + p.img} alt={p.title} className="object-contain" />
                        </div>
                        <div className='w-full my-1 p-2'>
                            <p className="text-xs text-indigo-600 mt-2 ml-1 italic">{p.techs}</p>
                            <p className='text-2xl mb-1 ml-1 font-extralight'>{p.title}</p>
                            <p className='text-sm text-gray-300 font-extralight text-justify mx-1'>{p.description}</p>
                        </div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}