import React from 'react';
import Header from '../Components/EnergyHeader';
import Container from '../Components/EnergyContainer';
import Footer from '../Components/EnergyFooter';

class HomePage extends React.Component {
    render(){ return(
        <div>
            <Header />
            <Container />
            <Footer />
        </div>
    )
}
}

export default HomePage;