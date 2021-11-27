export default function Resume() {
    return (
        <div className="w-full flex flex-row">
            <div className="w-1/2 h-5/6 bg-gray-50 flex items-center justify-center flex-col">
                <p className="text-xl font-sans mb-4 mt-4">Resúmen</p>
                <p className="w-4/5 text-justify mb-4">Ingeniero en tecnologias de la información y comunicaión área de sistemas informáticos,
                    me especializo en el desarrollo de software para web y móviles, tengo experiencia tanto
                    en desarrollo front-end como back-end y un amplio conocimiento en bases de datos SQL,
                    actualmente me apasiona el diseño y desarrollo de aplicaciones nativas con React Native
                    y el desarrollo web con React.js.
                </p>
            </div>
            <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-8 border-blue-500 flex items-center justify-center">
                    <p>Aqui va la imagen</p>
                </div>
            </div>
        </div>
    )
}