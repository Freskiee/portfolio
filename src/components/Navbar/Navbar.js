
import { useState } from 'react';
import * as S from './Navbar.styles';

const Navbar = () => {

    const [showMenuBurger, setShowMenuBurger] = useState(false);

    const clickItemNav = item => {
        document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <S.ContainerNavbar>
            <S.ContainerLogo>
                <S.ImageLogo src='/img/logo-dev.png' alt='logo' />
                <div>
                    <h1>Ariel Sánchez</h1>
                    <h2>Frontend Developer</h2>
                </div>
            </S.ContainerLogo>

            <S.ContainerBurger onClick={() => setShowMenuBurger(!showMenuBurger)}>
                <S.BurgerMenu />
                <S.BurgerMenu />
                <S.BurgerMenu />
            </S.ContainerBurger>

            <S.ContainerItems showMenuBurger={showMenuBurger}>
                <p onClick={() => clickItemNav('about-me')}>¿Quién soy?</p>
                <p onClick={() => clickItemNav('projects')}>Proyectos</p>
                <S.Button onClick={() => clickItemNav('contact')}>📲Pongámonos en contacto.</S.Button>
            </S.ContainerItems>
        </S.ContainerNavbar >
    );
};

export default Navbar;
