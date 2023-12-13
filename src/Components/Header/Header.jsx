import "./Header.css";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PHOTOS from "../Assets/index";
import { Link } from 'react-scroll';
import { ThemeSwitcher , ThemeSwitcher2} from "../ThemeSwitcher/ThemeSwitcher";
import ThemeList from '../Data/ThemeList';



const HeaderStyles = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme: { theme } }) =>
    theme === ThemeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: solid 1px var(--mediumSlateBlue);

    .logo{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    img{
    width: 70%;
    height: 100%;
    }

    .theme{
            display: none;
        }

    .nav-icons{
        display: none;
    }
}

    .desktopNav{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .myNav{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    li{
    list-style: none;

        a{
        color: ${({ theme: { theme } }) =>
        theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        font-size: 17px;
        font-weight: 700;
        text-decoration: none;
        padding: 5px;
        position: relative;

            a::after{
            content: "";
            width: 0;
            height: 3px;
            position: absolute;
            bottom: -10px;
            left: 0;
            background-color: var(--mediumSlateBlue);
            transition: all .3s;
            }
        }
        a:hover::after{
            width: 100%;
        }
 
    }

    
}

}

@media (max-width: 500px){


    .desktopNav{
    display: none;

}

    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme: { theme } }) =>
    theme === ThemeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
    padding: 0 20px;

        .logo{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img{
            width: 30%;
            height: 60%
        }

        .theme{
            display: flex;
            width: 50%;
            height: 100%;
            justify-content: flex-end;
            align-items: center;
        }

        .nav-icons{
            display: block;

            i{
                color: ${({ theme: { theme } }) =>
                theme === ThemeList.light ? 'var(--darkBlue_3)' : 'var(--lightBlue_1)'};
                font-size: 30px;
                cursor: pointer;
            }
        }
    }




    .mobile-navbar{
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 50px;
    top: 0;
    padding-left: 15px;
    padding-top: 20px;
    width: 70vw;
    height: 100vh;
    background-color: ${({ theme: { theme } }) =>
    theme === ThemeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
    box-shadow: var(--boxShadow);
    left: -100%;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: all .7s ease-in-out;
    z-index: 20;
    border-right: solid 1px var(--mediumSlateBlue);
    box-shadow: .5px 0 5px 1px var(--mediumSlateBlue);
}


     .mobile-navbar.mobile-navbar-open{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    position: fixed;
    left: 0;
}




        .mobile-navbar .mobile-navbar-items{
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;

        a{
            width: 90%;
            background-color: transparent;
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            height: 40px;
            font-size: 17px;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding-left: 10px;
        }
    }
}

`;

function Header(){

    //Mobile Navbar
    

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };


        return(
            <HeaderStyles>
                <div className="logo">
                    <img src={ PHOTOS.LOGO } alt="logo" />

                    <div className="theme">
                        <ThemeSwitcher2 />
                    </div>

                    <div className="nav-icons" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>

                {/* desktopNav navigation */}

                <nav className="desktopNav">
                    <ul className="myNav">
                        <li><Link to="hero" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500}>Home</Link></li>
                        <li><Link to="services" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500} >Services</Link></li>
                        <li><Link to="about" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                        <li><Link to="contact" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    </ul>

                    <div className="theme2">
                        <ThemeSwitcher />
                    </div>
                </nav>

                

                {/* mobile-navigation */}

                <nav className={click ? "mobile-navbar mobile-navbar-open" : "mobile-navbar"}>

                    <ul className="mobile-navbar-items">
                        <li><Link to="hero" onClick={handleClick} spy={true} smooth={true} offset={-200} duration={500}>Home</Link></li>
                        <li><Link to="services" onClick={handleClick} spy={true} smooth={true} offset={-80} duration={500}>Services</Link></li>
                        <li><Link to="about" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                        <li><Link to="contact" onClick={handleClick} spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    </ul>

                    <div className="theme">
                        
                    </div>
                </nav>
            </HeaderStyles>
        )
};


    

export default Header ;