import expertise from "../json/expertise"
import Footer from './Footer.js'

export default function Experience() {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2'>Experiencia</p>

            {
                expertise.map((e) => (
                    <div className="w-72 sm:w-80 md:80 p-2 md:w-96 font-light mb-5" key={e.id}>
                        <p className="text-sm md:text-base">{e.date}</p>
                        <p className="text-indigo-500 md:text-base font-semibold">{e.job}</p>
                        <p className="text-gray-300 text-sm md:text-base italic">@{e.company}</p>
                        <p className="text-gray-100 md:text-base text-justify">{e.description}</p>

                        <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2"></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}