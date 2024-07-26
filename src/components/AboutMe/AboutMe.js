
import * as S from './AboutMe.styles';
import logoGithub from '../../svg/github.svg';
import logoLinkedIn from '../../svg/linkedin.svg';
// import logoUdemy from '../../svg/udemy.svg';
// import logoYt from '../../svg/youtube.svg';

const AboutMe = () => {

    const socialNetworks = [
        {
            name: 'Github',
            link: 'https://github.com/Freskiee',
            logo: logoGithub
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ariel-s%C3%A1nchez-peralta-72a9a426b/',
            logo: logoLinkedIn
        },
        // {
        //     name: 'Udemy',
        //     link: 'https://www.udemy.com/user/ariel-alfredo-sanchez-peralta/',
        //     logo: logoUdemy
        // },
        // {
        //     name: 'YouTube',
        //     link: 'https://www.youtube.com/@arielfreskiee9509',
        //     logo: logoYt
        // },
    ];

    return (
        <S.ContainerAboutMe id='about-me'>
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼Hello, I'm</p>
                        <p>Ariel Sánchez</p>
                        <p>Frontend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        ¡Hola y bienvenido a mi portafolio!<br /><br />
                        Soy Ariel Sánchez, un desarrollador principiante con proyectos básicos pero bien estructurados.<br /><br />
                        Utilizo React para crear interfaces interactivas y Sass y CSS para el diseño.<br /><br />
                        También empleo Styled Components, Semantic UI React, Bootstrap, y Chakra UI.<br /><br />
                        Uso Vite para rendimiento, gestiono mi código en GitHub, y manejo rutas con React Router.<br /><br />
                        Cada proyecto refleja mi pasión por aprender y mejorar.<br /><br />
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a key={index} href={network.link} target='_blank' rel='noreferrer' >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src='/img/profile.png' alt='Ariel Freskiee | Developer' />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};

export default AboutMe;