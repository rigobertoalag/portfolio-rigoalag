export default function Experience() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-300">
            <div className="flex items-center mt-4 mb-4">
                <p>Experiencia</p>
            </div>
            <div className="bg-gray-300 flex flex-row justify-between">
                <div className="bg-gray-300 w-5/12  ml-8">
                    <p className="text-xs md:text-sm text-center mt-2">DESARROLLADOR PL/SQL - MESA DE AYUDA</p>
                    <p className="text-xs text-center mb-2">Abril 2019 - Actual</p>
                    <p className="text-xs md:text-sm text-justify m-2">
                        Desarrollo e implementacion de consultas PL/SQL avanzadas, se incorporo la metodología agil SCRUM y
                        actualmente realizo el soporte de aplicaciones atraves de solicitudes de mesa de ayuda, esta ultima
                        implica realizar cambios a nivel base de datos, listados de información, cuentas de usuario, etc.
                    </p>
                </div>
                <div className="bg-gray-300 w-5/12 flex items-center justify-center mr-8">
                    <p>Aqui va la img de TS</p>
                </div>
            </div>
            <div className="bg-gray-200 flex flex-row justify-between">
                <div className="bg-gray-200 w-5/12 flex items-center justify-center">
                    <p>Aqui va la img del simposium</p>
                </div>
                <div className="bg-gray-200 w-5/12  mr-8">
                    <p className="text-xs md:text-sm text-center mt-2">DESARROLLADOR LARAVEL</p>
                    <p className="text-xs text-center mb-2">Septiembre 2018 - Diciembre 2019</p>
                    <p className="text-xs md:text-sm text-justify m-2">
                        Para el simpusium se presento el proyecto de un simulador para la declaracion de impuestos,
                        basandonos en la pagina oficial del SAT y con la finalidad que los alumnos de las carreras
                        contables pudieran realizar practicas de una forma realista.
                    </p>
                </div>
            </div>
            <div className="bg-gray-300 flex flex-row justify-between">
                <div className="bg-gray-300 w-5/12 ml-8">
                    <p className="text-xs md:text-sm text-center mt-2">DESAROLLADOR RUBY ON RAILS</p>
                    <p className="text-xs text-center mb-2">Mayo 2017 - Agosto 2017</p>
                    <p className="text-xs md:text-sm text-justify m-2">
                        Con la finalidad de cumplir con las practicas profesionales, se desarrollo para la empresa
                        INNCOMEX un sitio web de cursos sobre robotica, donde los estudiantes podian aprender con videos
                        y aplicar sus conocimientos con examenes o cuestionarios.
                    </p>
                </div>
                <div className="bg-gray-300 w-5/12 flex items-center justify-center ml-8">
                    <p>Aqui va la img de MiRobotica</p>
                </div>
            </div>
            <div className="bg-gray-200 flex flex-row justify-between">
                <div className="bg-gray-200 w-5/12 flex items-center justify-center ml-8">
                    <p>Aqui va la img de la utem</p>
                </div>
                <div className="bg-gray-200 w-5/12 mr-8">
                    <p className="text-xs md:text-sm text-center mt-2">UNIVERSIDAD TECNOLOGICA DE MANZANILLO</p>
                    <p className="text-xs text-center mb-2">Septiembre 2015 - Mayo 2019</p>
                    <p className="text-xs md:text-sm text-justify m-2">
                        Carrera en tecnologias de la informacion y comnunicacion area de sistemas informaticos
                    </p>
                </div>
            </div>
        </div>
    )
}