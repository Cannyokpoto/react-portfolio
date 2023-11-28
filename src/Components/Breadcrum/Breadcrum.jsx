import React from "react";
import './Breadcrum.css'
import { GrNext } from "react-icons/gr";


function Breadcrum(props) {

    const {product} = props;

    return (
        <div className="breadcrum">
            HOME
            <GrNext className="greater" />
            SHOP
            <GrNext className="greater" />
            {product.category}
            <GrNext className="greater" />
            {product.name}
        </div>
    )
}

export default Breadcrum;