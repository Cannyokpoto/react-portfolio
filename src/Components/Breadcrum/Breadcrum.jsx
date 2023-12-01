import React from "react";
import './Breadcrum.css'
import { GrNext } from "react-icons/gr";


function Breadcrum(props) {

    const {product} = props;

    return (
        <div className="breadcrum">
            Home
            <GrNext className="greater" />
            Shop
            <GrNext className="greater" />
            {product.category}
            <GrNext className="greater" />
            {product.name}
        </div>
    )
}

export default Breadcrum;