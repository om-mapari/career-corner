import React from 'react'
import { Container } from 'react-bootstrap';

function Programs() {
  return (
    <div>
      <Container className="text-center my-5">
        <h1>
          <span className='fs-1' style={{ fontWeight: 'bold', color: 'black' }}>
            Career choices are LIFE choices
            We help you to make them RIGHT          </span>
        </h1>
        <p className="fs-6 lead text-secondary ">
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /> <br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>
        <hr className="bg-dark" />


      </Container>
    </div>
  )
}

export default Programs