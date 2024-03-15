import React from 'react';
import Banner from '../Components/Banner/banner';
import Card from '../Components/Card/Card';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import bg from '../img/bg.jpg'; // Import the image

function Main() {
  const bannerImage = {
    src: bg,
    alt: 'background'
  };

  return (
    <div>
      <Navbar />
      <Banner image={bannerImage} paragraph="Chez vous, partout et ailleurs" /> 
      <Card />
      <Footer />
    </div>
  );
};

export default Main;
