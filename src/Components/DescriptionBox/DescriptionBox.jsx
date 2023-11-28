import React from "react";
import './DescriptionBox.css'


function DescriptionBox() {

    return (
        <div className="descriptionBox">
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Review (170)</div>
            </div>

            <div className="descriptionBox-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi et ratione aliquid iure facere deserunt quae eum quos eius perspiciatis tenetur animi, atque, veritatis est impedit, placeat magni at vel ab porro? Blanditiis eveniet ipsum, rerum odio, voluptatum autem placeat molestias explicabo ex ullam consequatur, suscipit repudiandae dolore quo eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum pariatur officiis placeat recusandae enim perferendis ad excepturi voluptates, ratione odit repudiandae animi error ipsum corrupti mollitia nam! Adipisci, labore!</p>
            </div>
        </div>
    )
}

export default DescriptionBox;