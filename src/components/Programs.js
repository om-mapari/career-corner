import React from 'react'
import Heading from './Common/Heading';
import { Container } from 'react-bootstrap';
import CourseCard from './ProgramSubComponents/CourseCard';
import { courseData } from '../Constant'
import BigHeading from './Common/BigHeading';
import OurVisionComponent from './AboutSubComponents/OurVisionComponent';


function Programs() {


  const faqData = [
      {
        question : 'WHAT HAPPENS ONCE I REGISTER?',
        answer : 'Post your register after paying fees we will share a test link on your registered email ID. If you are enrolled for the counselling we will call you to discuss the available time slots and assign one for you.'
      },
      {
        question : 'WHO CAN TAKE THIS TEST?',
        answer : 'Students from class 9 to graduation can take this test. We have different test for different age groups.'
      },
      {
        question : 'CAN I OPT FOR ONLY COUNSELLING SESSION ?',
        answer : 'No, taking up the test is must before you attend your counselling session. The test helps our experts to know about your ability, interest and personality.'
      },
      {
        question : 'HOW THE COUNSELLING SESSION IS CONDUCTED?',
        answer : 'The counselling session will be conducted on Zoom. Both students as well as parents can attend the session'
      },
      {
        question : 'HOW LONG THE TEST AND COUNSELLING SESSION IS?',
        answer : 'The online test takes 45 mins time and the counselling session is also 45 mins. If you have any followup questions you can always ask them on email/whatsapp'
      }
  ]

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
        <Heading heading="FAQs" />
        {
          faqData.map(el => <OurVisionComponent key={el.question} PointHeading= {el.question} Point= {el.answer}  />)
        }

      </Container>
    </div>
  )
}

export default Programs
