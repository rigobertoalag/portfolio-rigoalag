import Footer from './Footer.js'

export default function Contact() {
    return (
        <div className='flex flex-col bg-black justify-center items-center py-4'>
            <p className='text-2xl font-extralight mb-4'>Contacto</p>
            <div className="flex flex-row justify-between text-center md:mb-16">
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
    )
}