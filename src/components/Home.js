import React from 'react'
import ProductSlider from './crousal/ImageSlider'
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <ProductSlider />

      <div class="p-1" style={{width:'100%', background: '#FF9900'}}> </div>

      <Container className="text-center my-5">
        <h1>
          <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
            About Us
          </span>
        </h1>
        <p className="fs-6 lead text-secondary ">
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /> <br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>
        <hr class="bg-dark" />

        <h1>
          <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
            Our Impact
          </span>
        </h1>

      </Container>
    </div>
  )
}

export default Home