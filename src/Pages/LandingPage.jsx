import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import styled from "styled-components";
import Services from '../Components/Services/Services';
import About from '../Components/About/About';
import Team from '../Components/Team/Team';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const LandingPageStyles = styled.div`

    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

function LandingPage() {
  return (
    <LandingPageStyles>
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <NewsLetter />
      <Contact />
      <Footer />
    </LandingPageStyles>
  )
}

export default LandingPage
