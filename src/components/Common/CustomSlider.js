import React, { useState,useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

Slider.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  sliderData: PropTypes.array.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
};

const CustomSlider = ({ currentIndex, nextSlide, prevSlide, sliderData }) => {
  const sliderRef = useRef(null);



  console.log('Received currentIndex:', currentIndex);
  console.log('Received sliderData:', sliderData);

  useEffect(() => {

    sliderRef.current.slickGoTo(currentIndex);
  }, [currentIndex]);


  const settings = {
    // dots: true,
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((sliderDataItem, index) => (
          <div key={index}>
            <div  key={index} dangerouslySetInnerHTML={{ __html: sliderDataItem }}></div>
          </div>
        ))}
      </Slider>
      <div className="slider-buttons">
        <button className="button" onClick={() => prevSlide()}>
          Previous
        </button>
        <button className="button" onClick={() => nextSlide()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
