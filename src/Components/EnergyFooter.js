import React from "react";
import PHOTOS from "./images/index.js";
import "./EnergyMall.css"

class Footer extends React.Component{

    render(){

        return(
            <div>
                <footer>
                    <div className="identity">
                        <img src={PHOTOS.PHOTO10} alt="" />
                        
                        <div className="reach-us">
                            <div className="contact">
                                <h5>contact us</h5>
                                <p>(+234) 815 090 6094</p>
                            </div>

                            <address>
                                <h5>address</h5>
                                <p>Lagos, Nigeria</p>
                            </address>
                        </div>
                    </div>

                    <hr/>

                    <div className="copy-right">
                        Copyright 2023 | All Rights Reserved 
                        <div>|</div> 
                        <div>Developed by 
                            <span> Promise Okpoto</span>
                        </div> 
                    </div>
                </footer>
            </div>
        )
    }
};






export default Footer ;