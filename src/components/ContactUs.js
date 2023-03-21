import React from 'react'
import BigHeading from './Common/BigHeading';
import { Container } from 'react-bootstrap';
import Contact from './ContactSubComponents/Contact';

function ContactUs() {
  return (
    <div>
      <BigHeading bigHeading="CONTACT US" currentPage="Contact Us" />

      <Container className="d-flex justify-content-center align-items-center ">
        <div className="shadow p-5 m-5">
          <img style={{width:"100%"}} src="https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/Banner1.jpg?resize=1024%2C311&ssl=1" alt="example" />
        </div>
      </Container>

      <Contact/>
    </div>
  )
}


export default ContactUs