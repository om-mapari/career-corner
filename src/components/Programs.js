import React from 'react'
import Heading from './Common/Heading';
import { Container } from 'react-bootstrap';
import CourseCard from './ProgramSubComponents/CourseCard';
import { courseData } from '../Constant'
import BigHeading from './Common/BigHeading';


function Programs() {




  return (
    <div>
      <BigHeading bigHeading="OUR PROGRAMS" currentPage="Our Programs" />

      <Container className="text-center my-5">
        <h1 style={{ fontWeight: 'bold', color: 'black', paddingLeft: '20%', paddingRight: '20%' }}>
          <span className='fs-1'>
            Career choices are LIFE choices <br/>
            We help you to make them RIGHT
          </span>
        </h1>
        <p className="fs-6 lead text-secondary" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /><br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>

        <Heading heading="Our Programs" />
        <div style={{ height: '50px' }}></div>


        <div className="container">
          {courseData.map((course, index) => (
            <CourseCard
              key={index}
              courseName={course.courseName}
              courseDetails={course.courseDetails}
              courseFees={course.courseFees}
              imageUrl={course.imageUrl}
              isImageOnLeft={index % 2 === 0}
            />
          ))}
        </div>

      </Container>
    </div>
  )
}

export default Programs
