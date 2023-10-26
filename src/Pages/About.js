import React from 'react';
import { Header, Navbar, CurrentPage} from '../NextHeader';
import { Container, reveal, leftAndRight } from '../NextContainer';
import { Footer } from '../NextFooter';


class About extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Container greater=">" />
                <Footer />
            </div>
        )
    }
};

export default About;