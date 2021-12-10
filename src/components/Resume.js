import social from "../json/social.js"

export default function Resume() {
    return (
        <div>
            <div className="h-80 top-44 absolute w-full flex flex-col justify-around items-center">
                <div className="h-32 w-32 rounded-full mb-2">
                    {/* <img src={process.env.PUBLIC_URL + "/img/raa.jpg"} alt="tecnosoft" className="h-32 rounded-full ring-2 ring-indigo-600 shadow-lg" /> */}
                    <img src="/img/raa.jpg" alt="riaa" className="h-32 rounded-full ring-4 ring-indigo-600 shadow-lg" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-3xl mb-4">Name</p>
                    <div className="flex flex-row w-full">
                        {
                            social.map((social) => (
                                <div className="flex flex-col justify-around items-center mr-4" key={social.id}>
                                    <a href={social.link} target="_blank" rel="noreferrer" className="flex flex-col justify-center items-center">
                                        <img src={process.env.PUBLIC_URL + social.icon} alt={social.name} className="h-7 w-7" />
                                        {/* <img src={social.icon} alt={social.name} className="h-7 w-7" /> */}
                                        <p className="text-white text-sm text-center font-extralight">{social.name}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <button className="bg-indigo-500 p-3 text-sm rounded-lg text-white my-2">Curriculum</button>
                </div>
            </div>

            <div className="mt-60 bg-black">
                <p className="text-justify font-extralight mb-4 text-white mx-3">Ingeniero en tecnologias de la información y comunicaión área de sistemas informáticos,
                    me especializo en el desarrollo de software para web y móviles, tengo experiencia tanto
                    en desarrollo front-end como back-end y un amplio conocimiento en bases de datos SQL,
                    actualmente me apasiona el diseño y desarrollo de aplicaciones nativas con React Native
                    y el desarrollo web con React.js.
                </p>
            </div>
        </div>









        // <div className="w-full flex flex-row">
        //     <div className="w-1/2 h-5/6 bg-gray-100 flex items-center justify-center flex-col py-10">
        //         <p className="font-sans mb-4 mt-4 text-4xl text-green-600 font-bold">Resúmen</p>
        //         <p className="w-4/5 text-justify mb-4 text-green-900">Ingeniero en tecnologias de la información y comunicaión área de sistemas informáticos,
        //             me especializo en el desarrollo de software para web y móviles, tengo experiencia tanto
        //             en desarrollo front-end como back-end y un amplio conocimiento en bases de datos SQL,
        //             actualmente me apasiona el diseño y desarrollo de aplicaciones nativas con React Native
        //             y el desarrollo web con React.js.
        //         </p>
        //     </div>
        //     <div className="w-1/2 bg-blue-300 flex items-center justify-center shadow-lg">
        //         <div className="w-56 h-56 rounded-full border-8 border-green-500 flex items-center justify-center shadow-lg bg-white">
        //             <img src={"img/raa.jpg"} alt="raa" className="w-full rounded-full" />
        //         </div>
        //     </div>
        // </div>
    )
}