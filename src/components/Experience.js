import expertise from "../json/expertise"
import Footer from './Footer.js'

export default function Experience({lenguage}) {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2 lg:mb-8 lg:text-4xl'>{!lenguage ? 'Experiencia' : 'Experience'}</p>

            {
                expertise.map((e) => (
                    <div className="w-72 sm:w-80 p-2 md:w-96 lg:w-1/4 font-light mb-5" key={e.id}>
                        {!lenguage ? <p className="text-sm md:text-base lg:text-lg">{e.dateES}</p> : <p className="text-sm md:text-base lg:text-lg">{e.dateEN}</p>}
                        {!lenguage ? <p className="text-indigo-500 md:text-base font-semibold lg:text-xl">{e.jobES}</p> : <p className="text-indigo-500 md:text-base font-semibold lg:text-xl">{e.jobEN}</p>}
                        <p className="text-gray-300 text-sm md:text-base italic lg:text-lg">@{e.company}</p>
                        {!lenguage ? <p className="text-gray-100 md:text-base text-justify lg:text-lg">{e.descriptionES}</p> : <p className="text-gray-100 md:text-base text-justify lg:text-lg">{e.descriptionEN}</p>}

                        <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2"></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}