import React from "react";
import PHOTOS from "../Assets";
import styled from "styled-components";

const PlanStyles = styled.div`

    width: 80vw;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    h1{
        width: 30vw;
        text-align: center;
        font-size: 25px;

        span{
            color: var(--orange);
        }
    }

    .our-plans{
        width: 100%;
        height: 95%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-top: 30px;

        .plan{
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            background-color: var(--caloryCard);
            padding: 20px;

            >img{
                width: 12%;
                height: 40px;
            }

            h3{
                color: var(--white);
                font-size: 17px;
            }

            h1{
                display: flex;
                color: var(--white);
                font-size: 30px;
            }

            .packages{
                width: 100%;
                height: 30%;
                display: flex;
                flex-direction: column;
                align-items: center;

                    .package{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;

                    img{
                        width: 10%;
                        height: 30px;
                    }

                    span{
                        color: var(--white);
                        font-size: 17px;
                    }
                }
            }

            .benefit{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 30px;

                span{
                        color: var(--white);
                        font-size: 17px;
                    }

                    img{
                        width: 7%;
                        height: 15px;
                    }
            }

            button{
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background-color: var(--white);
                color: var(--black);
                border: none;
                font-weight: 600;
                align-self: center;
            }
        }

        .premium{
            background: var(--planCard);
            height: 110%;

            button{
                color: var(--orange);
            }
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
            }

            p{
                font-size: 15px;
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
            }

            p{
                font-size: 15px;
            }
        }
    }
    }

`;

function Plan(){

        return(
            <PlanStyles className="plans">

                <h1>START <span>YOUR FITNESS JOURNEY</span> WITH US TODAY!</h1>
        
                <div className="our-plans">
                    <div className="plan">
                        <img src={PHOTOS.healthCare} alt="" />
                        <h3>BASIC PLAN</h3>
                        <h1><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>10,000</h1>

                        <div className="packages">
                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>2 hours of excercises</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Free consultaion to coaches</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Access to The Community</span>
                            </div>
                        </div>

                        <div className="benefit">
                            <span>See more benefits</span>
                            <img src={PHOTOS.RightArrow} alt="" />
                        </div>

                        <button>Join Now</button>
                    </div>

                    <div className="plan premium">
                        <img src={PHOTOS.crown} alt="" />
                        <h3>PREMIUM PLAN</h3>
                        <h1><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>25,000</h1>

                        <div className="packages">
                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>5 hour of excercises</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Free consultaion of Coaches</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Accessto minibar</span>
                            </div>
                        </div>

                        <div className="benefit">
                            <span>See more benefits</span>
                            <img src={PHOTOS.RightArrow} alt="" />
                        </div>

                        <button>Join Now</button>
                    </div>

                    <div className="plan">
                        <img src={PHOTOS.crossFit} alt="" />
                        <h3>PRO PLAN</h3>
                        <h1><div dangerouslySetInnerHTML={{__html: '&#8358;'}}></div>45,000</h1>

                        <div className="packages">
                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>8 hours of excercises</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Consultation of Private Coach</span>
                            </div>

                            <div className="package">
                                <img src={PHOTOS.WhiteTick} alt="" />
                                <span>Free Fitness Merchandises</span>
                            </div>
                        </div>

                        <div className="benefit">
                            <span>See more benefits</span>
                            <img src={PHOTOS.RightArrow} alt="" />
                        </div>

                        <button>Join Now</button>
                    </div>
                </div>
            </PlanStyles>
        )
};


    

export default Plan;