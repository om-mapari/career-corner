import React from 'react'
import Heading from './HomeSubComponents/Heading';
import { Container } from 'react-bootstrap';
import OurVisionComponent from './AboutSubComponents/OurVisionComponent';
import {OurStoryData} from '../Constant'

function OurStory() {



  return (
    <div>
      <Container className="text-center my-5">

        <Heading heading="OUR STORY" />
        {/* <div style={{ height: '50px' }}></div> */}

        <p className="fs-6 lead text-secondary" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in advancing their careers. We have launched career-oriented programmes alongside social initiatives geared towards helping people gain professional excellence.
        </p>

        {
          OurStoryData.map(el =>  <OurVisionComponent key={el.PointHeading} {...el} />)
        }
        <Heading heading="OUR FOCUS AREAS" />
       
      </Container>
    </div>
  )
}

export default OurStory
