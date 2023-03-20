import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({TestimonialPerson}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    console.log(TestimonialPerson);
    return (
        <div className="container py-5">
            <Slider {...settings}>

                {
                    TestimonialPerson.map((el)=>{
                        return (
                            <div>
                                <img
                                    src={el.personImage}
                                    alt={el.personName}
                                    className="rounded-circle mx-auto d-block mb-4"
                                    width="150"
                                />
                                <h4 className="text-center mb-3">{el.personName}</h4>
                                <p className="text-center mb-5">{el.personPost}</p>
                                <blockquote className="text-center">
                                    {el.personTestimonial}
                                </blockquote>
                            </div>
                        )
                    })
                }
                
            </Slider>
        </div>
    );
};

export default Testimonial;
