import React, { useState, useEffect, useRef } from 'react'
import ProductSlider from './Crousal/ImageSlider'
import Timer from './HomeSubComponents/Timer';
import Heading from './HomeSubComponents/Heading'
import Brand from './HomeSubComponents/Brand'
import { Container } from 'react-bootstrap';

function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Create a new IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      // Clean up the observer
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <ProductSlider />

      <div className="p-1" style={{ width: '100%', background: '#FF9900' }}> </div>

      <Container className="text-center my-5">
        <Heading heading="About Us" />

        <p className="fs-5 lead text-secondary text-center px-4">
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /> <br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>


        <Heading heading="Our Impact" />

        <div ref={ref}>
          {isVisible && <Timer />}
        </div>

        <Heading heading="Social Initiatives" />
        <Heading heading="Testimonials" />


        <div class="container">
          <div class="row">
            <div class="col-sm-4 d-flex justify-content-center">
              <Brand brandName="Merito Academy" mytext="Our Brand" imgUrl="https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM-2.jpeg?resize=480%2C320&ssl=1" />
            </div>
            <div class="col-sm-4 d-flex justify-content-center">
              <Brand brandName="Merito.in" mytext="Our Brand" imgUrl="https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM.jpeg?resize=480%2C320&ssl=1" />
            </div>
            <div class="col-sm-4 d-flex justify-content-center">
              <Brand brandName="Merito.in" mytext="Our Brand" imgUrl="https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM.jpeg?resize=480%2C320&ssl=1" />
            </div>
          </div>
        </div>



      </Container>
    </div>
  )
}

export default Home