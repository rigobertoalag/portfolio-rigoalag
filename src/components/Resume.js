export default function Resume() {
    return (
        <div className="w-full flex flex-row">
            <div className="w-1/2 h-5/6 bg-gray-100 flex items-center justify-center flex-col py-10">
                <p className="font-sans mb-4 mt-4 text-4xl text-green-600 font-bold">Resúmen</p>
                <p className="w-4/5 text-justify mb-4 text-green-900">Ingeniero en tecnologias de la información y comunicaión área de sistemas informáticos,
                    me especializo en el desarrollo de software para web y móviles, tengo experiencia tanto
                    en desarrollo front-end como back-end y un amplio conocimiento en bases de datos SQL,
                    actualmente me apasiona el diseño y desarrollo de aplicaciones nativas con React Native
                    y el desarrollo web con React.js.
                </p>
            </div>
            <div className="w-1/2 bg-blue-300 flex items-center justify-center shadow-lg">
                <div className="w-40 h-40 rounded-full border-8 border-green-500 flex items-center justify-center shadow-lg">
                    <p>Aqui va la imagen</p>
                </div>
            </div>
        </div>
    )
}