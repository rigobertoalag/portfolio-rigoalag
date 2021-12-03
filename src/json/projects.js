const projects = [
    {
        id: 1,
        title: "App de ahorros",
        description: "Aplicacion realizada en react native que simula una aplicacion de control de gastos y ahorros, tiene un login ficticio que valida solo que ambos campos no esten vacios, el resto del diseño y los datos mostrados se realizan con una llamada estatica de unarchivo JSON.",
        techs: [
            {
                id: 1,
                name: "ReactNative",
                color: "bg-blue-700",
                txtColor: "text-white",
                img: "img/techs/react_logo.png"
            },
            {
                id: 2,
                name: "JSON",
                color: "bg-yellow-400",
                txtColor: "text-black",
                img: "img/techs/json.png"
            },
            {
                id: 3,
                name: "CSS",
                color: "bg-blue-500",
                txtColor: "text-white",
                img: "img/techs/css.png"
            },
            {
                id: 4,
                name: "Figma",
                color: "bg-pink-400",
                txtColor: "text-white",
                img: "img/techs/figma.png"
            },
        ],
        img: "img/projects/budget.png",
        url: "https://snack.expo.dev/@rigoaa/rigobertoalag-budget-portfolio",
        gitUrl: "https://github.com/rigobertoalag/budget-portfolio"
    },
    {
        id: 2,
        title: "App Checar",
        description: "Aplicacion realizada en React Native, en la cual el objetivo principal es marcar la salida y entrada de los empleados para contabilizar las horas trabajadas, se uso una conexion via REST-API realizada en Laravel (en el siguiente apartado podras encontrar mas informacion), para el inicio de sesion y para guardar los datos necesarios, tales como la foto y la ubicacion del usuario. Si deseas conocer la funcionalidad a detalle entra al repositorio.",
        techs: [
            {
                id: 1,
                name: "ReactNative",
                color: "bg-blue-700",
                txtColor: "text-white",
                img: "img/techs/react_logo.png"
            },
            {
                id: 2,
                name: "JSON",
                color: "bg-yellow-400",
                txtColor: "text-black",
                img: "img/techs/json.png"
            },
            {
                id: 3,
                name: "Redux",
                color: "bg-purple-700",
                txtColor: "text-white",
                img: "img/techs/redux.svg"
            },
            {
                id: 4,
                name: "Styled Components",
                color: "bg-pink-600",
                txtColor: "text-white",
                img: "img/techs/sc.png"
            },
            {
                id: 5,
                name: "Figma",
                color: "bg-pink-400",
                txtColor: "text-white",
                img: "img/techs/figma.png"
            }
        ],
        img: "img/projects/checkapp.png",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/checkapp-mobile"
    },
    {
        id: 3,
        title: "REST API con Laravel y Sanctum",
        description: "REST API desarrollada que sirve como backend para App Checar, en este aplicativo podemos registrarnos, iniciar sesion y almacenar valores relacionados con la mencionada aplicacion, basado en tokens y con el sistema de autenticacion de Laravel-Sacntum se desarrollo con fines practicos, de momento se encuentra alojada en Heroku siguiendo la documentacion en el repositorio podra realizar y probar algunas consultas a la API",
        techs: [
            {
                id: 1,
                name: "Laravel",
                color: "bg-gray-50",
                txtColor: "text-black",
                img: "img/techs/laravel.png"
            },
            {
                id: 2,
                name: "MySQL",
                color: "bg-indigo-500",
                txtColor: "text-white",
                img: "img/techs/mysql2.png"
            },
            {
                id: 3,
                name: "REST API",
                color: "bg-blue-300",
                txtColor: "text-black",
                img: "img/techs/restapi.png"
            },
            {
                id: 4,
                name: "JSON",
                color: "bg-yellow-400",
                txtColor: "text-black",
                img: "img/techs/json.png"
            },
        ],
        img: "img/projects/laravel-sanctum.png",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/laravel-sanctum-tuto"
    },
    {
        id: 4,
        title: "Ver mas proyectos",
        description: "Te invito a revisar mis repositorios en GitHub dando click al siguiente link.",
        techs: [
            {
                id: 1,
                name: "GitHub",
                color: "bg-white",
                txtColor: "text-black",
                img: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
            }
        ],
        img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/"
    }
]

export default projects;