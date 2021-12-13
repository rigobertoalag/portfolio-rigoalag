const projects = [
    {
        id: 1,
        title: "App de ahorros",
        description: "Aplicacion realizada en react native que simula una aplicacion de control de gastos y ahorros, tiene un login ficticio que valida solo que ambos campos no esten vacios, el resto del diseño y los datos mostrados se realizan con una llamada estatica de unarchivo JSON.",
        techs: "React Native",
        img: "/img/projects/budget.PNG",
        url: "https://snack.expo.dev/@rigoaa/rigobertoalag-budget-portfolio",
        gitUrl: "https://github.com/rigobertoalag/budget-portfolio"
    },
    {
        id: 2,
        title: "App Checar",
        description: "Aplicacion realizada en React Native, en la cual el objetivo principal es marcar la salida y entrada de los empleados para contabilizar las horas trabajadas, se uso una conexion via REST-API realizada en Laravel (en el siguiente apartado podras encontrar mas informacion), para el inicio de sesion y para guardar los datos necesarios, tales como la foto y la ubicacion del usuario. Si deseas conocer la funcionalidad a detalle entra al repositorio.",
        techs: "React Native",
        img: "/img/projects/checkapp.PNG",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/checkapp-mobile"
    },
    {
        id: 3,
        title: "Técnica Pomodoro",
        description: "Aplicacion web responsiva donde se recrea la forma Pomodoro para el estudio efectivo o concentracion al realizar tareas, se desarrollo con React usando Hooks",
        techs: "React JS",
        img: "/img/projects/pomodoro.PNG",
        url: "",
        gitUrl: "https://rigobertoalag.github.io/pomodoro-portfolio/"
    },
    {
        id: 4,
        title: "REST API con Laravel y Sanctum",
        description: "REST API desarrollada que sirve como backend para App Checar, en este aplicativo podemos registrarnos, iniciar sesion y almacenar valores relacionados con la mencionada aplicacion, basado en tokens y con el sistema de autenticacion de Laravel-Sacntum se desarrollo con fines practicos, de momento se encuentra alojada en Heroku siguiendo la documentacion en el repositorio podra realizar y probar algunas consultas a la API",
        techs: "Laravel",
        img: "/img/projects/laravel-sanctum.PNG",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/laravel-sanctum-tuto"
    },
]

export default projects;