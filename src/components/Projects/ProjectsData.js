import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import htmlImage from '../../images/techs/html.png';
import jsImage from '../../images/techs/js-transparent.png';
import simpsonProject from "../../images/projects/simpson.jpg";
import dymamicFormProject from "../../images/projects/dynamic.jpg";
import gasolineraProject from "../../images/projects/gasolinera.jpg";
import marvelProject from "../../images/projects/marvel.jpg";
import rickMorty from "../../images/projects/rick-morty.jpg";
import tareasProject from "../../images/projects/todo.jpg";
import blackjackProject from '../../images/projects/blackjack.png';
import carritoCompras from '../../images/projects/carritoCompras.png';
import simuladorEmail from '../../images/projects/enviar_email.png';
import buscadorMultiple from '../../images/projects/buscador-autos.png';
import twitter from '../../images/projects/tweets.png';
import cotizaSeguro from '../../images/projects/cotizacion-seguro.png';

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            { name: "React ", src: reactImage },
            { name: "CSS", src: cssImage },
        ],
        description:
            "Aplicación creada con React JS y CSS, puede hacer peticiones externas a una API para poder ver los personajes de Rick & Morty.",
        repository: "https://github.com/Freskiee/rick-morty-course",
        website: "https://rick-and-morty-freskiee.netlify.app/",
    },
    {
        title: "Lista Todo",
        image: tareasProject,
        techs: [
            { name: "React ", src: reactImage },
            { name: "Semantic UI React", src: semanticImage },
        ],
        description:
            "Aplicación creada con React JS y Semantic UI, donde puedes agregar o eliminar elementos de la lista TODO.",
        repository: "https://github.com/Freskiee/todolist-proyectos",
        website: "https://todo-list-freskiee.netlify.app/",
    },
    {
        title: "Simpson API",
        image: simpsonProject,
        techs: [
            { name: "React JS ", src: reactImage },
            { name: "Styled Components", src: styledImage },
        ],
        description:
            "Aplicación creada con React JS y Styled Components, donde puedes hacer consultas externas a una API para ver las mejores frases de los Simpson.",
        repository: "https://github.com/Freskiee/simpson-phrases",
        website: "https://phrases-simpson-freskiee.netlify.app/",
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            { name: "React", src: reactImage },
            { name: "React Router ", src: reactRouterdomImage },
            { name: "Sass", src: sassImage },
            { name: "Semantic", src: semanticImage },
        ],
        description:
            "Aplicación creada con React JS, React Router y Sass, donde hace peticiones externas a una API de Marvel, y puedes observar los comics y series de los diferentes superheroes.",
        repository: "https://github.com/Freskiee/marvel-react",
        website: "https://marvel-app-freskiee.netlify.app/",
    },
    {
        title: "Formulario dinámico",
        image: dymamicFormProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "React Bootstrap", src: reactBootstrapImage },
        ],
        description:
            "Aplicación de una landing page desarrollada con React JS y React Bootstrap que incluye un formulario con campos dinámicos.",
        repository: "https://github.com/Freskiee/dynamic-form-project",
        website: "https://dynamic-form-freskiee.netlify.app/",
    },
    {
        title: "Estación de Gasolina",
        image: gasolineraProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Chakra", src: chakraImage },
            { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description:
            "Aplicación creada con Vite que permite guardar información y visualizarla en un resumen.",
        repository: "https://github.com/Freskiee/gasolinera-vite",
        website: "https://gasolinera-freskiee.netlify.app/",
    },
    {
        title: "BlackJack",
        image: blackjackProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "CSS", src: cssImage },
            { name: "React Bootstrap", src: reactBootstrapImage },
        ],
        description:
            "Aplicación creada con Vite, CSS y Bootstrap que permite jugar al Blackjack 21 de manera interactiva.",
        repository: "https://github.com/Freskiee/blackjack-app",
        website: "https://blackjack-freskiee.netlify.app/",
    },
    {
        title: "Carrito de compras",
        image: carritoCompras,
        techs: [
            { name: "Javascript", src: jsImage },
            { name: "CSS", src: cssImage },
            { name: "HTML", src: htmlImage },
        ],
        description:
            "Aplicación creada con JavaScript, HTML y CSS, donde puedes agregar diferentes productos a un carrito de compras, eliminar o vaciar tu carrito.",
        repository: "https://github.com/Freskiee/15-PROYECTO-Carrito",
        website: "https://carrito-de-compras-freskiee.netlify.app/",
    },
    {
        title: "Simulador de envio de emails",
        image: simuladorEmail,
        techs: [
            { name: "Javascript", src: jsImage },
            { name: "CSS", src: cssImage },
            { name: "HTML", src: htmlImage },
        ],
        description:
            "Aplicación creada con JavaScript, HTML y CSS, donde puedes simular el envio de un email, con validaciones en cada campo.",
        repository: "https://github.com/Freskiee/simulador-de-envios-de-email",
        website: "https://simulador-email-freskiee.netlify.app/",
    },
    {
        title: "Buscador múltiples campos",
        image: buscadorMultiple,
        techs: [
            { name: "Javascript", src: jsImage },
            { name: "CSS", src: cssImage },
            { name: "HTML", src: htmlImage },
        ],
        description:
            "Aplicación creada con JavaScript, HTML y CSS, donde puedes filtrar tus busquedas dependiendo el campo que te interese buscar.",
        repository: "https://github.com/Freskiee/buscador-multiples-campos",
        website: "https://buscador-multiple-freskiee.netlify.app/",
    },
    {
        title: "Twitter",
        image: twitter,
        techs: [
            { name: "Javascript", src: jsImage },
            { name: "CSS", src: cssImage },
            { name: "HTML", src: htmlImage },
        ],
        description:
            "Aplicación creada con JavaScript, HTML y CSS, donde puedes agregar y eliminar tweets, haciendola consistente almacenando la información y actualizando mediante el localStorage.",
        repository: "https://github.com/Freskiee/twitter-localstorage",
        website: "https://twitter-freskiee.netlify.app/",
    },
    {
        title: "Cotizador de seguros",
        image: cotizaSeguro,
        techs: [
            { name: "Javascript", src: jsImage },
            { name: "CSS", src: cssImage },
            { name: "HTML", src: htmlImage },
        ],
        description:
            "Aplicación de cotización de seguros de auto, creada con JavaScript, HTML y CSS, donde puedes ingresar datos del vehículo (marca, año y tipo de seguro) para calcular el costo. Muestra el resultado en pantalla con un desglose y utiliza mensajes de error o éxito para guiar al usuario. La aplicación incluye animación con un spinner de carga y permite seleccionar entre años recientes.",
        repository: "https://github.com/Freskiee/cotizador-seguros",
        website: "https://cotiza-tu-seguro-freskiee.netlify.app/",
    },
];