import React from 'react';
import '../Components/About.css';
import Header from '../Components/EnergyHeader';
import Footer from '../Components/EnergyFooter';
import AboutContent from '../Components/AboutContent';


class About extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <AboutContent />
                <Footer />
            </div>
        )
    }
};

export default About;