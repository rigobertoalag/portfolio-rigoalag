const projects = [
    {
        id: 1,
        titleES: "App de ahorros",
        titleEN: "Budget App",
        descriptionES: "Aplicacion realizada en react native que simula una aplicacion de control de gastos y ahorros, tiene un login ficticio que valida solo que ambos campos no esten vacios, el resto del diseño y los datos mostrados se realizan con una llamada estatica de unarchivo JSON.",
        descriptionEN: "Application made in react native that simulates an application to control expenses and savings, has a fictitious login that only validates that both fields are not empty, the rest of the design and the data shown are made with a static call of a JSON file.",
        techs: "React Native",
        img: "/img/projects/budget.PNG",
        url: "https://snack.expo.dev/@rigoaa/rigobertoalag-budget-portfolio",
        gitUrl: "https://github.com/rigobertoalag/budget-portfolio"
    },
    {
        id: 2,
        titleES: "App Checar",
        titleEN: "Check in App",
        descriptionES: "Aplicacion realizada en React Native, en la cual el objetivo principal es marcar la salida y entrada de los empleados para contabilizar las horas trabajadas, se uso una conexion via REST-API realizada en Laravel (en el siguiente apartado podras encontrar mas informacion), para el inicio de sesion y para guardar los datos necesarios, tales como la foto y la ubicacion del usuario. Si deseas conocer la funcionalidad a detalle entra al repositorio.",
        descriptionEN: "Application made in React Native, in which the main objective is to mark the exit and entry of the employees to count the hours worked, a connection via REST-API made in Laravel was used (in the next section you can find more information), to the login and to save the necessary data, such as the user's photo and location. If you want to know the functionality in detail, enter the repository.",
        techs: "React Native",
        img: "/img/projects/checkapp.PNG",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/checkapp-mobile"
    },
    {
        id: 3,
        titleES: "Técnica Pomodoro",
        titleEN: "Pomodoro Technique",
        descriptionES: "Aplicacion web responsiva donde se recrea la forma Pomodoro para el estudio efectivo o concentracion al realizar tareas, se desarrollo con React usando Hooks",
        descriptionEN: "Responsive web application where the Pomodoro form is recreated for effective study or concentration when performing tasks, it was developed with React using Hooks",
        techs: "React JS",
        img: "/img/projects/pomodoro.PNG",
        url: "",
        gitUrl: "https://rigobertoalag.github.io/pomodoro-portfolio/"
    },
    {
        id: 4,
        titleES: "REST API con Laravel y Sanctum",
        titleEN: "EN REST API with Laravel and Sanctum",
        descriptionES: "REST API desarrollada que sirve como backend para App Checar, en este aplicativo podemos registrarnos, iniciar sesion y almacenar valores relacionados con la mencionada aplicacion, basado en tokens y con el sistema de autenticacion de Laravel-Sacntum se desarrollo con fines practicos, de momento se encuentra alojada en Heroku siguiendo la documentacion en el repositorio podra realizar y probar algunas consultas a la API",
        descriptionEN: "REST API developed that serves as a backend for App Check, in this application we can register, log in and store values ​​related to the aforementioned application, based on tokens and with the Laravel-Sacntum authentication system, it was developed for practical purposes. It is hosted on Heroku by following the documentation in the repository, you will be able to perform and test some queries to the API",
        techs: "Laravel",
        img: "/img/projects/laravel-sanctum.PNG",
        url: "",
        gitUrl: "https://github.com/rigobertoalag/laravel-sanctum-tuto"
    },
]

export default projects;