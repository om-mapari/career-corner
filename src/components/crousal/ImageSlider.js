import React, { Component } from "react";
import Slider from "react-slick";
import ImageCard from "./ImageCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";


class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Delhi-2012.jpg?w=640&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/DSC_8135-scaled.jpg?resize=640%2C425&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/IMG_6146-scaled.jpg?resize=640%2C427&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Delhi-2012.jpg?w=640&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Delhi-2012.jpg?w=640&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/DSC_8135-scaled.jpg?resize=640%2C425&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/IMG_6146-scaled.jpg?resize=640%2C427&ssl=1"
        },
        {
          img: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Delhi-2012.jpg?w=640&ssl=1"
        }
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ImageCard imgSrc={slide.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
