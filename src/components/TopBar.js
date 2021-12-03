export default function TopBar() {
    return (
        <div className="flex h-12 items-center justify-center border-b-2 border-gray-300">
            <p className="cursor-pointer">Inicio</p>
            <div className="flex flex-row-reverse w-10/12">
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">Contacto</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">Proyectos</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">Experiencia</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">Resumen</p>
            </div>
        </div>
    )
}