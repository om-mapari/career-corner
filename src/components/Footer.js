import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CONTACT US</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              <li>Phone</li>
              <li>+91 72766-30705</li>
              <li>Email</li>
              <li>admin@merito.in</li>
              <li>Address</li>
              <li>Baner,Pune,Maharashtra 411045</li>
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CAREER CORNER</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              <li>Our Programs</li>
              <li>Our Story</li>
              <li>Our Brands</li>
              <li>Social Initiatives</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>OUR BRANDS</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              <li>Merito.ai</li>
              <li>Merito Academy</li>
              <li>Helppad</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center" >
          <p style={{ color: '#999999' }}> 2023 Career Corner. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;