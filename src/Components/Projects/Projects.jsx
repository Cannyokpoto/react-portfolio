import React from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectData from "../Data/projectData";

const ProjectsStyles = styled.div`
    width: 90vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 30px;

    .top{
        width: 90vw;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        >h1{
            color: var(--cannyBlue);
            font-size: 30px;
        }

        >p{
            font-size: 20px;
        }
    }

    .project{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 70px;
        box-shadow: var(--boxShadow);


        .left-hand-side{
        width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;


        img{
            width: 100%;
            height: 100%;
        }
    }
}




    .right-hand-side{
        width: 40%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        img{
            width: 60px;
            height: 30px;
        }

        .tools{
            font-size: 20px;
            width: 20%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: gray;
        }

        .code-demo{
            font-size: 17px;
            width: 70%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            

            a{
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                color: black;

                h5{
                    font-size: 15px;
                }

                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }
        }

        p{
            font-size: 15px;
            }

        .reasons{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;


                .reason{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;


                p{
                    font-size: 17px;
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
        margin-top: 70px;
        gap: 30px;

    .top{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        >h1{
            color: var(--cannyBlue);
            font-size: 25px;
        }

        >p{
            font-size: 20px;
            text-align: center;
        }
    }

    .project{
        width: 100%;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        box-shadow: var(--boxShadow);
        padding: 10px;


        .left-hand-side{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;


        img{
            width: 100%;
            height: 100%;
        }
    }
}


    .right-hand-side{
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        h3{
            font-size: 17px;
        }

        p{
            font-size: 15px;
        }

        .tools{
            font-size: 20px;
            width: 60%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: gray;
        }

        .code-demo{
            font-size: 17px;
            width: 70%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            

            a{
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                color: black;

                h5{
                    font-size: 15px;
                }

                
                .demo{
                    width: 20%;
                    height: 50%;
                }
            }
        }

        p{
            font-size: 15px;
        }
    }

}
`;

function Projects(){

        return(
            <ProjectsStyles className="hero-section" id="projects">

                <div className="top">
                    <h1>Projects</h1>
                    <p>Each project is a unique piece of development.</p>
                </div>
        
                {
                    projectData.map((project) =>{
                        return(
                            <div className="project">
                                <div className="left-hand-side">
                                    <img src={project.image} alt=""/>
                                </div>

                                <div className="right-hand-side">
                                    <h3>{project.title}</h3>
                                    
                                    <p>{project.description}</p>

                                    <div className="tools"> 
                                        <h5>React</h5>
                                        <h5>CSS</h5>
                                    </div>

                                    <div className="code-demo">
                                        <a href={project.code}>
                                            <h5>Code</h5>
                                            <IoLogoGithub className="demo" />
                                        </a>

                                        <a href={project.demo}>
                                            <h5>Live Demo</h5>
                                            <FaExternalLinkAlt className="demo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ProjectsStyles>
        )
};


    

export default Projects;