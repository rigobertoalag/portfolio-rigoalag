import expertise from "../json/expertise"
import Footer from './Footer.js'

export default function Experience() {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl sm:text-3xl font-extralight mb-2'>Experiencia</p>

            {
                expertise.map((e) => (
                    <div className="w-72 sm:w-80 p-2 font-light mb-5" key={e.id}>
                        <p className="text-sm">{e.date}</p>
                        <p className="text-indigo-500 font-semibold">{e.job}</p>
                        <p className="text-gray-300 text-sm italic">@{e.company}</p>
                        <p className="text-gray-100 text-justify">{e.description}</p>

                        <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2"></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}