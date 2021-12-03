export default function Cover() {
    let hola = "<Hola"
    let mundo = "Mundo/>"
    return (
        <div className="h-full w-full flex flex-row justify-around shadow-lg mb-8">
            <div className="">
                <p className="text-green-600 font-bold text-8xl ">{hola}</p>
                <p className="text-green-600 font-bold text-8xl ml-16 ">{mundo}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-green-600 font-bold text-8xl">Portafolio</p>
                <p className="text-green-600 font-bold text-4xl">RIGOBERTO ALCANTAR</p>
            </div>
        </div>
    )
}