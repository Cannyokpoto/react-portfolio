import { React } from "react";
import styled from "styled-components";
import ProgramsData from '../Data/programsData';



const ProgramsStyles = styled.div`

    width: 90vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;

    h2{
        width: 35vw;
        text-align: center;
        line-height: 1.5;

            span{
                color: var(--orange);
            }
        }

        .programs-wrapper{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 70px;

            .program{
                width: 20%;
                height: 350px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                padding-left: 20px;
                border-radius: 10px;
                cursor: pointer;
                background-color: var(--caloryCard);
                color: var(--white);

                &:hover{
                    background: var(--planCard);
                }


                    span{
                    width: 15%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;

                    .icon{
                        color: var(--white);
                        width: 100%;
                        height: 40px;
                    }
                }

                h4{
                   
                    font-size: 20px;
                }

                p{
                    font-size: 17px;
                }

                .join{
                    width: 50%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    img{
                        width: 20%;
                        height: 20px;
                    }
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
            margin-top: 50px;
            gap: 40px;

    h2{
            
            font-size: 30px;
        }

        .programs-wrapper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            .program{
                width: 100%;
                height: 250px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                padding: 20px;
                border-radius: 10px;
                cursor: pointer;
                background-color: var(--mediumSlateBlue);

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
                    width: 17%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border-radius: 60%;
                    background-color: var(--lightBlue_1);
                    padding: 2px;

                    .icon{
                        color: var(--mediumSlateBlue);
                        width: 60%;
                        height: 79px;
                    }
                }

                h4{
                    font-size: 20px;
                    color: var(--lightBlue_1);

                }

                p{
                    font-size: 15px;
                    color: var(--lightBlue_1);

                }
            }
        }
        }
    
`;

function Programs(props){

        return(
            <ProgramsStyles className="programs" id="programs">
                <h2>EXPLORE <span>OUR PROGRAMS</span> TO SHAPE YOU</h2>
        
                <div className="programs-wrapper">
                    {
                        ProgramsData.map((program) =>{
                            return(
                                <div className="program">
                                    <span><img src={program.image} alt="" className="icon" /></span>
                                    <h4>{program.heading}</h4>
                                    <p>{program.details}</p>
                                    <div className="join">
                                        <p>Join Now</p>
                                        <img src={program.arrow} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ProgramsStyles>
        )
};


    

export default Programs;