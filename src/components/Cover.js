import { useState, useEffect } from 'react'

export default function Cover() {

    const [onLoad, setOnLoad] = useState(false)

    useEffect(() => {
        setOnLoad(true)
    }, [])

    let hola = "<Hola"
    let mundo = "Mundo/>"

    return (
        <div className="bg-gray-600 h-64 flex justify-center items-center border-2 border-white">
            <p className='text-white text-xl'>Imagen de cover</p>
        </div>
        // <div className="h-screen w-screen">
        //     <div className="h-full w-full shadow-lg mb-8 sm:mb-1">
        //         <div className={`sm:mb-44 duration-500 transform transition-all ${onLoad ? "translate-y-16" : "-translate-y-8"} ease-out`}>
        //             <p className="text-green-600 font-bold text-8xl sm:text-8xl sm:ml-4">{hola}</p>
        //             <p className="text-green-600 font-bold text-8xl ml-16 sm:text-8xl sm:ml-20">{mundo}</p>
        //         </div>
        //         <div className={`flex flex-col justify-center items-center duration-1000 transform transition-all ${onLoad ? "translate-y-16" : "-translate-y-6"} ease-out`}>
        //             <p className="text-green-600 font-bold text-8xl sm:text-8xl ">Portafolio</p>
        //             <p className="text-green-600 font-bold text-4xl sm:4xl">RIGOBERTO ALCANTAR</p>
        //         </div>
        //     </div>
        // </div>
    )
}