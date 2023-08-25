// Core
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Menu = ({images}) => {
  return (
    <div className="menu-container" id='menu'>
      <Carousel 
        showStatus={false} 
        showThumbs={false} 
        autoPlay={true} 
        interval={4000} 
        infiniteLoop={true} 
        showArrows={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Menu;
