import React from "react";
import styled from "styled-components";
import ThemeList from '../Data/ThemeList';
import { GrGallery } from "react-icons/gr";
import { IoCamera } from "react-icons/io5";
import { TbHearts } from "react-icons/tb";



const ServicesStyles = styled.div`

    width: 90vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;

    h2{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }

        .services-wrapper{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .service{
                width: 30%;
                height: 70%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                padding-left: 20px;
                border-radius: 10px;
                cursor: pointer;

                &:hover{
                    background-color: var(--mediumSlateBlue);
                }

                &:hover span{
                    background-color: var(--lightBlue_1);
                }

                &:hover .icon{
                    color: var(--mediumSlateBlue);
                }

                &:hover h4{
                    color: var(--lightBlue_1);
                }

                &:hover p{
                    color: var(--lightBlue_1);
                }


                    span{
                    width: 15%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;
                    background-color: var(--mediumSlateBlue);

                    .icon{
                        color: var(--lightBlue_1);
                        width: 60%;
                        height: 79px;
                    }
                }

                h4{
                    color: ${({ theme: { theme } }) =>
                    theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
                    font-size: 20px;
                }

                p{
                    color: ${({ theme: { theme } }) =>
                    theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
                    font-size: 17px;
                }
            }
        }

        
        @media (max-width: 500px){
            width: 90vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 150px;

    h2{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }

        .services-wrapper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            .service{
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                padding-left: 20px;
                border-radius: 10px;
                cursor: pointer;

                &:hover{
                    background-color: var(--mediumSlateBlue);
                }

                &:hover span{
                    background-color: var(--lightBlue_1);
                }

                &:hover .icon{
                    color: var(--mediumSlateBlue);
                }

                &:hover h4{
                    color: var(--lightBlue_1);
                }

                &:hover p{
                    color: var(--lightBlue_1);
                }


                    span{
                    width: 15%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;
                    background-color: var(--mediumSlateBlue);

                    .icon{
                        color: var(--lightBlue_1);
                        width: 60%;
                        height: 79px;
                    }
                }

                h4{
                    color: ${({ theme: { theme } }) =>
                    theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
                    font-size: 20px;
                }

                p{
                    color: ${({ theme: { theme } }) =>
                    theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
                    font-size: 17px;
                }
            }
        }
        }
    
`;

function Services(){

        return(
            <ServicesStyles className="services">
                <h2>Our Services</h2>
        
                <div className="services-wrapper">
                    <div className="service">
                        <span><GrGallery className="icon" /></span>
                        <h4>Professional Editing</h4>
                        <p>We do professional photo editing. Let us help 
                            you to take your photo next level.</p>
                    </div>

                    <div className="service">
                        <span><IoCamera className="icon" /></span>
                        <h4>Professional Editing</h4>
                        <p>You can hire us for any kind of casual Photography. Book us for your next events.</p>
                    </div>

                    <div className="service">
                        <span><TbHearts className="icon" /></span>
                        <h4>Wedding Photography</h4>
                        <p>Wedding is the most memorable events of our life. Let us help you to capture it.</p>
                    </div>
                </div>
            </ServicesStyles>
        )
};


    

export default Services;