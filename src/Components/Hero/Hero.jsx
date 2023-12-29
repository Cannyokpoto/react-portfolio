import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";

const HeroStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 130px;

    .left-hand-side{
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        h1{
            font-size: 55px;

            span{
                color: var(--cannyBlue);
            }
        }

        p{
            font-size: 20px;
            color: var(--darkGrey);
        }

        .tech-stack{
            width: 100%;
            height: 55px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 50px;
            margin-top: 50px;

            .tag{
                width: 27%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
            }

            .stack{
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                img{
                    width: 9%;
                    height: 40%;
                }
            }
        }
    }

    .right-hand-side{
        width: 45%;
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
        height: 450px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 50px;


    .left-hand-side{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        h1{
            font-size: 25px;

            span{
                color: var(--cannyBlue);
            }
        }

        p{
            font-size: 15px;
            color: var(--darkGrey);
        }

        .tech-stack{
            width: 100%;
            height: 55px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            margin-top: 20px;

            .tag{
                width: 35%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
                font-size: 15px;
                border: dashed;
            }

            .stack{
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                img{
                    width: 12%;
                    height: 50%;
                }
            }
        }
    }

    .right-hand-side{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 70%;
            height: 100%;
        }
    }
}
`;

function Hero(){

        return(
            <HeroStyles className="hero-section" id="hero">
                <div className="left-hand-side">
                    <h1>Front-End <span>React Developer</span></h1>

                    <p>Hi, I'm Promise Okpoto, a passionate front-end react developer based in Lagos state, Nigeria.</p>

                    <div className="tech-stack">
                        <div className="tag">
                            <h5>Tech Stack</h5>
                            <span>|</span>
                        </div>

                        <div className="stack">
                            <img src={PHOTOS.html} alt="html" />
                            <img src={PHOTOS.css} alt="css" />
                            <img src={PHOTOS.js} alt="js" />
                            <img src={PHOTOS.reactjs} alt="react" />
                        </div>
                    </div>
                </div>
        
                <div className="right-hand-side">
                    <img src={PHOTOS.HERO} alt=""/>
                </div>
            </HeroStyles>
        )
};


    

export default Hero;