import React from 'react';
import { Header, Navbar, CurrentPage} from '../NextHeader';
import { Container, reveal, leftAndRight } from '../NextContainer';
import { Footer } from '../NextFooter';

function Contact(){
    return(
        <div>
            <Header />
            <Container greater=">" />
            <Footer />
        </div>
    )
}

export default Contact;