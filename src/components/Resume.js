import social from "../json/social.js"

export default function Resume({ lenguage }) {
    return (
        <div>
            <div className="h-80 sm:h-96 md:top-96 sm:top-36 top-44 absolute lg:relative lg:-top-96 w-full flex flex-col justify-around items-center">
                <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-60 md:w-48, lg:h-80 lg:w-80 rounded-full mb-2 md:mb-4">
                    <img src={process.env.PUBLIC_URL + "/img/raa.jpg"} alt="raa" className="h-32 sm:h-48 lg:h-80 lg:w-96 rounded-full ring-4 lg:ring-8 ring-indigo-600 shadow-lg" />
                    {/* <img src="/img/raa.jpg" alt="riaa" className="h-32 rounded-full ring-4 ring-indigo-600 shadow-lg" /> */}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-2xl lg:text-4xl sm:text-3xl mb-4 sm:mb-4 text-center">Rigoberto Alcantar Aguilar</p>
                    <div className="flex flex-row justify-center items-center w-full">
                        {
                            social.map((social) => (
                                <div className="flex flex-col justify-around items-center mr-4" key={social.id}>
                                    <a href={social.link} target="_blank" rel="noreferrer" className="flex flex-col justify-center items-center">
                                        <img src={process.env.PUBLIC_URL + social.icon} alt={social.name} className="h-8 w-8 md:h-10 md:w-10 sm:h-9 sm:w-9 lg:h-14 lg:w-14" />
                                        {/* <img src={social.icon} alt={social.name} className="h-7 w-7" /> */}
                                        <p className="text-white text-sm md:text-base text-center font-extralight">{social.name}</p>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    {

                    }
                </div>

                <div className="mt-60 md:mt-64 sm:mt-64 lg:mt-10 lg:w-1/2 bg-black">
                    {
                        lenguage ? (<p className="text-justify md:text-lg font-light mb-4 md:mb-7 text-white mx-5 md:mx-32 sm:mt-10 lg:text-xl">Engineer in information technology and communication in the computer systems area, I specialize in the development of software for web and mobile phones, I have experience in both front-end and back-end development and extensive knowledge in SQL databases, currently I am passionate about the design and development of native applications with React Native and the web development with React.js.</p>)
                            :
                            (<p className="text-justify md:text-lg font-light mb-4 md:mb-7 text-white mx-5 md:mx-32 lg:text-xl lg:mb-0">
                                Ingeniero en tecnologias de la información y comunicaión área de sistemas informáticos,
                                me especializo en el desarrollo de software para web y móviles, tengo experiencia tanto
                                en desarrollo front-end como back-end y un amplio conocimiento en bases de datos SQL,
                                actualmente me apasiona el diseño y desarrollo de aplicaciones nativas con React Native
                                y el desarrollo web con React.js.
                            </p>)
                    }
                </div>
            </div>
        </div>
    )
}