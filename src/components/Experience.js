export default function Experience() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100">
            <div className="flex items-center py-10 text-4xl font-bold">
                <p className="text-green-600">Experiencia</p>
            </div>
            <div className="bg-gray-100 flex flex-row justify-around py-10 shadow-lg">
                <div className="bg-gray-100 w-5/12  ml-8">
                    <p className="md:text-sm text-center mt-2 font-semibold text-xl text-green-600">DESARROLLADOR PL/SQL - MESA DE AYUDA</p>
                    <p className="text-xs text-center mb-2 font-extralight">Abril 2019 - Actual</p>
                    <p className="text-xs md:text-sm text-justify m-2 text-green-900">
                        Desarrollo e implementacion de consultas PL/SQL avanzadas, se incorporo la metodología agil SCRUM y
                        actualmente realizo el soporte de aplicaciones atraves de solicitudes de mesa de ayuda, esta ultima
                        implica realizar cambios a nivel base de datos, listados de información, cuentas de usuario, etc.
                    </p>
                </div>
                <div className="bg-gray-100 w-5/12 flex items-center justify-center mr-8">
                    <div className="border-4 border-green-600 rounded-full h-56 w-56 flex justify-center items-center bg-white shadow-lg">
                        {/* <img src={process.env.PUBLIC_URL + "/img/jobs/ts.png"} alt="tecnosoft" className="h-3/5" /> */}
                        <img src={"img/jobs/ts.png"} alt="tecnosoft" className="h-3/5" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 flex flex-row justify-around py-10 shadow-lg">
                <div className="bg-gray-200 w-5/12 flex items-center justify-center">
                    <div className="border-4 border-green-600 rounded-full h-56 w-56 flex justify-center items-center bg-white shadow-lg">
                        <img src={"img/jobs/si.png"} alt="impacta" className="h-3/5" />
                    </div>
                </div>
                <div className="bg-gray-200 w-5/12  mr-8">
                    <p className="md:text-sm text-center mt-2 font-semibold text-xl text-green-600">DESARROLLADOR LARAVEL</p>
                    <p className="text-xs text-center mb-2 font-extralight">Septiembre 2018 - Diciembre 2019</p>
                    <p className="text-xs md:text-sm text-justify m-2 text-green-900">
                        Para el simpusium se presento el proyecto de un simulador para la declaracion de impuestos,
                        basandonos en la pagina oficial del SAT y con la finalidad que los alumnos de las carreras
                        contables pudieran realizar practicas de una forma realista.
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 flex flex-row justify-around py-10 shadow-lg">
                <div className="bg-gray-100 w-5/12 ml-8">
                    <p className="md:text-sm text-center mt-2 font-semibold text-xl text-green-600">DESAROLLADOR RUBY ON RAILS</p>
                    <p className="text-xs text-center mb-2 font-extralight">Mayo 2017 - Agosto 2017</p>
                    <p className="text-xs md:text-sm text-justify m-2 text-green-900">
                        Con la finalidad de cumplir con las practicas profesionales, se desarrollo para la empresa
                        INNCOMEX un sitio web de cursos sobre robotica, donde los estudiantes podian aprender con videos
                        y aplicar sus conocimientos con examenes o cuestionarios.
                    </p>
                </div>
                <div className="bg-gray-100 w-5/12 flex items-center justify-center ml-8">
                    <div className="border-4 border-green-600 rounded-full h-56 w-56 flex justify-center items-center bg-white shadow-lg">
                        <img src={"img/jobs/mr.png"} alt="mirobotica" className="w-3/5" />
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 flex flex-row justify-around py-10 shadow-lg">
                <div className="bg-gray-200 w-5/12 flex items-center justify-center">
                    <div className="border-4 border-green-600 rounded-full h-56 w-56 flex justify-center items-center bg-white shadow-lg">
                        <img src={"img/jobs/utm.png"} alt="utem" className="w-9/12" />
                    </div>
                </div>
                <div className="bg-gray-200 w-5/12 mr-8">
                    <p className="md:text-sm text-center mt-2 font-semibold text-xl text-green-600">UNIVERSIDAD TECNOLOGICA DE MANZANILLO</p>
                    <p className="text-xs text-center mb-2 font-extralight">Septiembre 2015 - Mayo 2019</p>
                    <p className="text-xs md:text-sm text-justify m-2 text-green-900">
                        Carrera en ingenieria en tecnologias de la informacion y comnunicacion area de sistemas informaticos
                        Carrera en ingenieria en tecnologias de la informacion y comnunicacion area de sistemas informaticos
                    </p>
                </div>
            </div>
        </div>
    )
}