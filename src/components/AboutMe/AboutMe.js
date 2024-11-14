
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
                        <p>👋🏼Hola, Soy</p>
                        <p>Ariel Sánchez</p>
                        <p>Frontend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        ¡Hola, bienvenido a mi portafolio!<br /><br />
                        Soy Ariel Sánchez, un desarrollador en formación, con proyectos básicos que destacan por su estructura y atención al detalle.<br /><br />
                        Mis áreas de trabajo incluyen JavaScript y React para construir interfaces, y he explorado herramientas de diseño como Sass, Bootstrap, Styled Components y Chakra UI para crear experiencias visualmente agradables. Además, me apoyo en Vite para optimizar el rendimiento de los proyectos y utilizo GitHub para gestionar el código.<br /><br />
                        Cada proyecto refleja mi compromiso por aprender y mi pasión por la programación, con un enfoque en mejorar continuamente mis habilidades y conocimientos.<br /><br />
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