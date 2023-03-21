import React from 'react'
import Heading from './HomeSubComponents/Heading';
import { Container } from 'react-bootstrap';
import OurVisionComponent from './AboutSubComponents/OurVisionComponent';
import { OurStoryData } from '../Constant'
import FocusArea from './AboutSubComponents/FocusArea';
import BigHeading from './Common/BigHeading';


function AboutUs() {

  const FocusAreaData = [
    {
      Image: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/ed.jpg?resize=600%2C338&ssl=1",
      Information: `Our education initiatives aimed at helping students to identify and get into the RIGHT career. We are providing career discovery programs for students and professionals through Merito Academy. Merito Academy will also provide training and certification for meeting the industry need of hiring jobs-ready candidates across different entry level job roles.

      Through our social initiatives like Enlight, #LeadtheChange and #WeFightCC wehave helped more than 50,000 students to make RIGHT career decisions.`
    },
    {
      Image: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/em.jpg?resize=600%2C334&ssl=1",
      Information: `
      Our employment initiatives are aimed at helping students & professionals for getting RIGHT jobs and companies to hire quality talent. Merito which is our curated talent platform aims at helping growth companies to hire handpicked candidates for job roles across levels. Merito is pioneer in assessment driven hiring and changing the way hiring is done.
      
      At present we are working with more than 20 clients and hiring 100+ open positions across different levels and job roles.`
    },
    {
      Image: "https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/entrepreneurship-tycoon-small-business-enterprise-concept-83519529.jpg?resize=600%2C415&ssl=1",
      Information: `Our entrepreneurship initiatives are aimed at helping students and professionals for their entrepreneurship development. Our entrepreneurship development program - SEED, helps individual from idea to execution stages of their start-up journey. We collaborate with educational institutes to provide these programs.

      We are mentoring early stage start-ups for maneuvering challenges in their start-up journey by leveraging our experience.`
    }
  ]

  return (
    <div>
      <BigHeading bigHeading="ABOUT US" currentPage="About Us" />

      <Container className="text-center my-5">



        <Heading heading="OUR STORY" />
        {/* <div style={{ height: '50px' }}></div> */}

        <p className="fs-6 lead text-secondary" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in advancing their careers. We have launched career-oriented programmes alongside social initiatives geared towards helping people gain professional excellence.
        </p>

        {
          OurStoryData.map(el => <OurVisionComponent key={el.PointHeading} {...el} />)
        }
        <Heading heading="OUR FOCUS AREAS" />
        <div style={{ height: '50px' }}></div>

        {
          FocusAreaData.map((el,idx) => <FocusArea key={idx} {...el} />)
        }


      </Container>
    </div>
  )
}

export default AboutUs
