import React, { Component } from "react";
import Slider from "react-slick";
import CityCard from "../CustomCityCard/CustomCityCard";

class CustomSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { cityData } = this.props;
    return (
      <Slider {...settings}>
        
              <CityCard  />
              
              
            
      </Slider>
    );
  }
}

export default CustomSlider;
