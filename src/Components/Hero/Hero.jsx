import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";
import ThemeList from '../Data/ThemeList';

const HeroStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 150px;

    .left-hand-side{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h1{
            font-size: 55px;
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }

        p{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            font-size: 20px;
        }

        button{
            background-color: var(--mediumSlateBlue);
            color:  var(--lightBlue_1);
            width: 35%;
            height: 55px;
            padding: 2px;
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 5px;
            font-size: 15px;
        }
    }

    .right-hand-side{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 500px){
        width: 90vw;
        height: 70vh;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around;
        margin-top: 100px;


    .left-hand-side{
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 0;
        position: relative;
        top: -20px;

        h1{
            font-size: 25px;
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }

        p{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            font-size: 15px;
        }

        button{
            background-color: var(--mediumSlateBlue);
            color:  var(--lightBlue_1);
            width: 40%;
            height: 50px;
            padding: 2px;
            margin-top: 17px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 5px;
            font-size: 15px;
        }
    }

    .right-hand-side{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
        }
    }
    }
`;

function Hero(){

        return(
            <HeroStyles className="hero-section">
                <div className="left-hand-side">
                    <h1>A Click Of <br /> Rare Images</h1>
                    <p>Because every picture tells a story, let us help you tell yours.</p>
                    <button>Get In Touch</button>
                </div>
        
                <div className="right-hand-side">
                    <img src={PHOTOS.HERO} alt=""/>
                </div>
            </HeroStyles>
        )
};


    

export default Hero;