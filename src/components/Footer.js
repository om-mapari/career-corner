import React from 'react';

function Footer() {
  const address = [
    'Phone', '+91 72766-30705', 'Email', 'admin@merito.in', 'Address', 'Baner,Pune,Maharashtra 411045'
  ]
  const our = [
    'Our Programs','Our Story','Our Story','Social Initiatives','Contact Us'
  ]
  const brand = [
    'Merito.ai','Merito Academy','Helppad'
  ]
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CONTACT US</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              {
                address.map((el) => {
                  return <li key={el}>{el}</li>;
                })
              }
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CAREER CORNER</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
  
              {
                our.map((el) => {
                  return <li key={el}>{el}</li>;
                })
              }
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>OUR BRANDS</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              {
                brand.map((el) => {
                  return <li key={el}>{el}</li>;
                })
              }
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