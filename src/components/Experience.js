import expertise from "../json/expertise"
import Footer from './Footer.js'

export default function Experience({lenguage}) {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2'>{!lenguage ? 'Experiencia' : 'Experience'}</p>

            {
                expertise.map((e) => (
                    <div className="w-72 sm:w-80 md:80 p-2 md:w-96 font-light mb-5" key={e.id}>
                        {!lenguage ? <p className="text-sm md:text-base">{e.dateES}</p> : <p className="text-sm md:text-base">{e.dateEN}</p>}
                        {!lenguage ? <p className="text-indigo-500 md:text-base font-semibold">{e.jobES}</p> : <p className="text-indigo-500 md:text-base font-semibold">{e.jobEN}</p>}
                        <p className="text-gray-300 text-sm md:text-base italic">@{e.company}</p>
                        {!lenguage ? <p className="text-gray-100 md:text-base text-justify">{e.descriptionES}</p> : <p className="text-gray-100 md:text-base text-justify">{e.descriptionEN}</p>}

                        <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2"></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}