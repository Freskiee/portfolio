
import { useState } from 'react';
import * as S from './Navbar.styles';

const Navbar = () => {

    const [showMenuBurger, setShowMenuBurger] = useState(false);

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
                <p>About me</p>
                <p>Projects</p>
                <S.Button>📲Contact me</S.Button>
            </S.ContainerItems>
        </S.ContainerNavbar >
    );
};

export default Navbar;
