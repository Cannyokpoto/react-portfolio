import React from 'react';
import '../Components/Services.css';
import Header from '../Components/EnergyHeader';
import Footer from '../Components/EnergyFooter';
import ServicesContent from '../Components/ServicesContent';



class ServicesPage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <ServicesContent />
                <Footer />
            </div>
        )
    }
};

export default ServicesPage;