import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpg";
import dymamicFormProject from "../../images/projects/dynamic.jpg";
import gasolineraProject from "../../images/projects/gasolinera.jpg";
import marvelProject from "../../images/projects/marvel.jpg";
import rickMorty from "../../images/projects/rick-morty.jpg";
import tareasProject from "../../images/projects/todo.jpg";
import blackjackProject from '../../images/projects/blackjack.png';

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            { name: "React ", src: reactImage },
            { name: "CSS", src: cssImage },
        ],
        description:
            "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/Freskiee/rick-morty-course",
        website: "https://rick-and-morty-freskiee.netlify.app/",
    },
    {
        title: "Lists Todo",
        image: tareasProject,
        techs: [
            { name: "React ", src: reactImage },
            { name: "Semantic UI React", src: semanticImage },
        ],
        description:
            "Application created with React JS and Semantic UI to make a list of tasks where you can add or remove it.",
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
            "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
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
            "Application created with React JS, React Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/Freskiee/marvel-react",
        website: "https://marvel-app-freskiee.netlify.app/",
    },
    {
        title: "Dynamic Form",
        image: dymamicFormProject,
        techs: [
            { name: "React JS", src: reactImage },
            { name: "React Bootstrap", src: reactBootstrapImage },
        ],
        description:
            "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/Freskiee/dynamic-form-project",
        website: "https://dynamic-form-freskiee.netlify.app/",
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            { name: "Vite", src: viteImage },
            { name: "Chakra", src: chakraImage },
            { name: "React Router DOM", src: reactRouterdomImage },
        ],
        description:
            "Application created with Vite where you can save the information and see it on a summary",
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
            "Application created with Vite, CSS and Bootstrap where you can play Blackjack 21",
        repository: "https://github.com/Freskiee/blackjack-app",
        website: "https://ariel-build-app.netlify.app/",
    },
];