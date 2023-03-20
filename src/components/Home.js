import React, { useState, useEffect, useRef } from 'react'
import ProductSlider from './Crousal/ImageSlider'
import Timer from './HomeSubComponents/Timer';
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
        <h1>
          <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
            About Us
          </span>
        </h1>
        <p className="fs-5 lead text-secondary text-center px-4">
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /> <br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>
        <hr className="bg-dark" />

        <h1>
          <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
            Our Impact
          </span>
        </h1>



        <div ref={ref}>
          {isVisible && <Timer />}
        </div>

      </Container>
    </div>
  )
}

export default Home