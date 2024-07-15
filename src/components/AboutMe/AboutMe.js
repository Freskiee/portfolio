
import * as S from './AboutMe.styles';
import logoGithub from '../../svg/github.svg';
import logoLinkedIn from '../../svg/linkedin.svg';
import logoUdemy from '../../svg/udemy.svg';
import logoYt from '../../svg/youtube.svg';

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
        {
            name: 'Udemy',
            link: 'https://www.udemy.com/user/ariel-alfredo-sanchez-peralta/',
            logo: logoUdemy
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/@arielfreskiee9509',
            logo: logoYt
        },
    ];

    return (
        <S.ContainerAboutMe>
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼Hello, I'm</p>
                        <p>Ariel Sánchez</p>
                        <p>Frontend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Ipsum consectetur culpa deserunt nostrud proident consequat fugiat laboris esse ex reprehenderit consequat mollit anim. Irure laboris deserunt Lorem pariatur. Ullamco mollit id aute excepteur. Est id excepteur ut ipsum enim in est consectetur magna qui veniam. Deserunt velit laborum non ut anim Lorem. Lorem consequat et enim aliquip. Anim et proident tempor officia elit incididunt.
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