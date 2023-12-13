import React from "react";
import TeamObject from "./TeamObject";
import styled from "styled-components";
import ThemeList from '../Data/ThemeList';

const TeamStyles = styled.div`

    width: 90vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 150px;

    .tag{
        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 15px;

        span{
            color: var(--mediumSlateBlue);
            font-size: 20px;
            font-weight: 600;
        }

        h2{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        }
    }

    .members{
        width: 80%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

            .member{
            width: 30%;
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-top: 20px;
            gap: 5px;

                img{
                width: 90%;
                height: 90%;
                border-radius: 10px;
            }

            h4{
                font-size: 17px;
                color: ${({ theme: { theme } }) =>
                theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            }

            p{
                font-size: 15px;
                color: ${({ theme: { theme } }) =>
                theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
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
        margin-top: 100px;

    .tag{
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        padding-bottom: 10px;

        span{
            color: var(--mediumSlateBlue);
            font-size: 17px;
            font-weight: 600;
        }

        h2{
            color: ${({ theme: { theme } }) =>
            theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            text-align: center;
            width: 60vw;
        }
    }

    .members{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding-top: 20px;

            .member{
            width: 40vw;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 5px;

                img{
                width: 100%;
                height: 150px;
                border-radius: 10px;
            }

            h4{
                font-size: 17px;
                color: ${({ theme: { theme } }) =>
                theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            }

            p{
                font-size: 15px;
                color: ${({ theme: { theme } }) =>
                theme === ThemeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_2)'};
            }
        }
    }
    }

`;

function Team(){

        return(
            <TeamStyles className="Team">
                <div className="tag">
                    <span>Team Members</span>
                    <h2>The best team available</h2>
                </div>
        
                <div className="members">
                    {
                        TeamObject.map((member) => {
                            return(
                                <div className="member">
                                    <img src={member.image} alt=""/>
                                    <div className="details">
                                        <h4>{member.name}</h4>
                                        <p>{member.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </TeamStyles>
        )
};


    

export default Team;