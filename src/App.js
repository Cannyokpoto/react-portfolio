import React from "react";
import { useContext } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./Components/Contexts/ThemeContext";
import LandingPage from "./Pages/LandingPage";
import GlobalStyles from "./Styles/GlobalStyles";


function App() {
  const { theme } = useContext(ThemeContext);
    return (
      <div className="App">
        <ThemeProvider theme={{ theme} }>
            <GlobalStyles />
            <LandingPage />
        </ThemeProvider>
      </div>
    );
  }
  
  export default App;