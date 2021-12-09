import techs from '../json/tech.js'

export default function Techs() {
    return (
        <div className="h-80 bg-gray-100">
            <div className="flex justify-center py-10 text-4xl font-bold">
                <p className="text-green-600">Tecnologias</p>
            </div>
            <div className="h-full w-full flex flex-row justify-center">
                {
                    techs.map((t) => (
                        <div className="h-36 w-24 rounded-lg bg-white text-white ml-4 sm:ml-1 mr-4 sm:mr-1 flex flex-col justify-center items-center shadow-lg border-2 border-gray-200" key={t.id}>
                            <img src={t.img} alt={t.title} className="h-16 my-2 " />
                            <div className="bg-black h-16 w-full flex items-center text-center justify-center rounded-b-lg sm:text-xs">
                                <p>{t.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}