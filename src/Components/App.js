import './EnergyMall.css';
import PHOTOS from "./images/index";
import Header from './EnergyHeader';
import Container from './EnergyContainer';
import Footer from './EnergyFooter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className="logo">
            <i className="fas fa-bars" id="menu-btn"></i>
            <img src={ PHOTOS.PHOTO10 } alt="logo" />
        </div>
        
        <nav className="desktopNav">
            <ul className="myNav">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./services.html">Services</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>

            <div className="engage">
                <a href="/contact.html">Engage</a>
            </div>
        </nav>
      </header> */}

      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
