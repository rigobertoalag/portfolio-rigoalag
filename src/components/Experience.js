import expertise from "../json/expertise"
import Footer from './Footer.js'

export default function Experience() {
    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl font-extralight mb-2'>Experiencia</p>

            {
                expertise.map((e) => (
                    <div className="w-72 p-2 font-extralight mb-5" key={e.id}>
                        <p className="text-xs">{e.date}</p>
                        <p className="text-indigo-600">{e.job}</p>
                        <p className="text-gray-400 text-sm italic">@{e.company}</p>
                        <p className="text-gray-200 text-justify">{e.description}</p>

                        <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2"></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}