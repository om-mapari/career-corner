import React, { useState, useEffect } from 'react'
import ProductSlider from './crousal/ImageSlider'
import { Container } from 'react-bootstrap';

function Home() {

 
 // Set the initial state for each timer
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);

 const duration = 3000;

 useEffect(() => {
   const startTime = Date.now();

   const intervalId = setInterval(() => {
     const elapsed = Date.now() - startTime;
     const newCount1 = Math.floor((elapsed / duration) * 300);
     const newCount2 = Math.floor((elapsed / duration) * 10);
     const newCount3 = Math.floor((elapsed / duration) * 5000);

     if (newCount1 <= 300) {
       setCount1(count1=>newCount1);
     } else {
       setCount1(count1=>300);
     }
     if (newCount2 <= 10) {
       setCount2(count2=>newCount2);
     } else {
      setCount2(count2=>10);
    }
     if (newCount3 <= 5000) {
       setCount3(count3=>newCount3);
     } else {
      setCount3(count3=>5000)
    }

     if (elapsed >= duration) {
       clearInterval(intervalId);
     }
   }, 10);

   return () => {
    clearInterval(intervalId)
   };
 }, []);


 


  const noSize = { fontSize: '69px', fontWeight: 'bold', color: '#FF9900' }
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
        <p className="fs-6 lead text-secondary ">
          Career Corner is a career services platform founded by COEP and IIM Ahmedabad alumnus with the goal of equipping students and professionals for their career development. Since its inception in 2011 as DISHA, Career Corner has assisted over 50,000 students and professionals in choosing the RIGHT career for them.
          <br /> <br />We have launched career-oriented programs alongside social initiatives geared towards helping people gain professional excellence.
        </p>
        <hr className="bg-dark" />

        <h1>
          <span style={{ fontWeight: 'bold', color: '#FF9900' }}>
            Our Impact
          </span>
        </h1>

        <div className="container" >
          <div className="row">
            <div className="col-sm-4">
              <div>
                <span style={noSize}>{count1}</span>
              </div>
              <div>Career Guidance Sessions</div>
            </div>
            <div className="col-sm-4">
              <div>
                <span style={noSize}>{count2}</span>
              </div>
              <div>Years in Action</div>
            </div>
            <div className="col-sm-4">
              <span></span>
              <div>
                <div>
                  <span style={noSize}>{count3}</span>
                </div>
              </div>
              <div>Students & Professionals</div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Home