import React from 'react';
import './Contact.css';
// import PHOTOS from './images/index.js';
import { Link } from 'react-router-dom';

function ContactContent(){


    return(
        <div  id="react_container">
            <section className="contacts" id="contacts">
                <span className="myspan">
                    <i className="fa-solid fa-phone"></i>
                    <h3>Hotline</h3>
                    <p>Hi, Hope you're having a productive day? You can reach us by dialing these numbers.</p>
                    <h5>08037145222 | 09077755525</h5>
                    <hr/>
                </span>

                <span className="myspan">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Our Location</h3>
                    <p>420 New Mami, Opposte Otokiti Housing Estate, Lokoja, Kogi State.</p>
                    <Link href="map">Follow Directions <i className="fas fa-chevron-down"></i></Link>
                </span>

                <span className="myspan">
                    <i className="fa-regular fa-envelope"></i>
                    <h3>Official Email</h3>
                    <p>You can send us a mail and you'd get our response within 24hours</p>
                    <Link href="mailto:ifynweks@gmail.com">ifynweks@gmal.com</Link>
                </span>
            </section>

            <div className="map" id="map">
                <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.510691985848!2d6.653512578756947!3d7.802773059864943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f5eb728f6f1dd%3A0x6aec34847b5c4a10!2sLokoja%20Housing%20Estate!5e0!3m2!1sen!2sng!4v1688082146254!5m2!1sen!2sng'} 
                width="600" height="450" 
                title='My Map'
                style={{ border: "0"}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
    
};






export default ContactContent;