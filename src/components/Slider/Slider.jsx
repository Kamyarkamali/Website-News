import React from 'react';
import Slider from 'react-slick';
//styled
import "./Slider.css";



function Sliders({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.image} alt="images" />
        </div>
      ))}
    </Slider>
  )
}

export default Sliders