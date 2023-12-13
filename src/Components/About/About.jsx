import React from "react";
import PHOTOS from "../Assets/index";
import styled from "styled-components";
import ThemeList from '../Data/ThemeList';

const AboutStyles = styled.div`

    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 150px;

    .left-hand-side{
        width: 33%;
        height: 79%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        span{
            color: var(--mediumSlateBlue);
            font-size: 15px;
        }

        h1{
            font-size: 40px;
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }

        p{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
            font-size: 15px;
            line-height: 1.5;
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
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-top: 50px;
        gap: 20px;

        
        
        .left-hand-side{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;


        span{
            color: var(--mediumSlateBlue);
            font-size: 15px;
        }

        h1{
            font-size: 25px;
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'}
        }

        p{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
            font-size: 15px;
            line-height: 1.5;
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
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        img{
            width: 100%;
            height: 100%;
        }
    }
    
    }


`;

function About(){

        return(
            <AboutStyles className="hero-section" id="about">
        
                <div className="right-hand-side">
                    <img src={PHOTOS.ABOUT} alt=""/>
                </div>

                <div className="left-hand-side">
                    <span>Who Are We</span>
                    <h1>Capturing life as it happens</h1>
                    <p>Rare images is a professional photography brand. Our 
                        Goal is to capture your happy moments and keep the memories alive.</p>
                    <button>Get In Touch</button>
                </div>
            </AboutStyles>
        )
};


    

export default About;