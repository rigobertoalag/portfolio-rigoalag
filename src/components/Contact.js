import Footer from './Footer.js'

export default function Contact() {
    return (
        <div className='flex flex-col bg-black justify-center items-center py-4'>
            <p className='text-2xl font-extralight mb-4'>Contacto</p>
            <div className="flex flex-row justify-between text-center">
                <div className="flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xl font-extralight">Correo</p>
                    <p className="text-indigo-500">rigobertoalcantar95@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
        // <div className="w-full bg-gray-100">
        //     <div className="flex justify-center items-center text-4xl font-bold py-10">
        //         <p className="text-green-600">Contacto</p>
        //     </div>

        //     <div className="bg-gray-100 flex justify-center h-full w-full pb-10 sm:pb-5 rounded-lg shadow-lg">
        //         <div className="h-4/5 w-9/12 flex flex-row bg-gray-100">
        //             <div className="bg-gray-100 w-1/2">
        //                 <div className="flex justify-center py-6 font-bold text-xl sm:text-lg">
        //                     <p className="text-green-600">Redes sociales</p>
        //                 </div>
        //                 <div className="flex flex-col">
        //                     {
        //                         social.map((social) => (
        //                             <a href={social.link} target="_blank" rel="noreferrer" className="flex flex-row border-2 border-gray-300 rounded bg-gray-200 p-2 hover:bg-gray-300 hover:border-gray-400 mb-4 sm:mb-3 shadow-lg" key={social.id}>
        //                                 <img src={social.icon} alt={social.name} className="h-1/12 sm:h-6 w-1/12 sm:w-6 ml-2" />
        //                                 <p className="ml-2 text-green-900">{social.name}</p>
        //                             </a>
        //                         ))
        //                     }
        //                 </div>
        //             </div>
        //             <div className="bg-gray-100 w-3/4 h-full">
        //                 <div className="flex justify-center py-6 font-bold text-xl">
        //                     <p className="text-green-600">Contacto directo</p>
        //                 </div>
        //                 <div className="flex flex-row ml-4 mb-8">
        //                     <div className="w-52 sm:w-48 h-52 sm:h-40 bg-gray-200 text-center border-2 rounded border-gray-300 flex flex-col justify-center items-center mx-4 shadow-lg">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        //                         </svg>
        //                         <p className="font-bold text-base sm:text-xs text-green-900 sm:mt-1">Celular / Whatsapp:</p>
        //                         <p className="text-lg text-green-900 sm:text-xs sm:mt-1">+52 314-122-13-91</p>
        //                     </div>
        //                     <div className="w-64 sm:w-40 h-52 sm:h-40 bg-gray-200 text-center border-2 rounded border-gray-300 flex flex-col justify-center items-center mx-4 shadow-lg">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        //                         </svg>
        //                         <p className="font-bold text-base text-green-900">Correo:</p>
        //                         <p className="text-base text-green-900 text-justify sm:text-xs">rigobertoalcantar95@gmail.com</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}