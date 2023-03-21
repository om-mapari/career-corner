import React, { useState } from 'react';

function Footer() {

  const [addressHoverIndex, setAddressHoverIndex] = useState(null);
  const [ourHoverIndex, setOurHoverIndex] = useState(null);
  const [brandHoverIndex, setBrandHoverIndex] = useState(null);

  const address = [
    'Phone', '+91 72766-30705', 'Email', 'admin@merito.in', 'Address', 'Baner,Pune,Maharashtra 411045'
  ]
  const our = [
    'Our Programs', 'Our Story', 'Social Initiatives', 'Contact Us'
  ]
  const brand = [
    'Merito.ai', 'Merito Academy', 'Helppad'
  ]

  const handleAddressMouseOver = (index) => {
    setAddressHoverIndex(index);
  }

  const handleAddressMouseOut = () => {
    setAddressHoverIndex(null);
  }

  const handleOurMouseOver = (index) => {
    setOurHoverIndex(index);
  }

  const handleOurMouseOut = () => {
    setOurHoverIndex(null);
  }

  const handleBrandMouseOver = (index) => {
    setBrandHoverIndex(index);
  }

  const handleBrandMouseOut = () => {
    setBrandHoverIndex(null);
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CONTACT US</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              {
                address.map((el, index) => {
                  const isHovered = index === addressHoverIndex;
                  const style = {
                    color: isHovered ? '#FFFFFF' : '#999999',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  };

                  return (
                    <li
                      key={el}
                      style={style}
                      onMouseOver={() => handleAddressMouseOver(index)}
                      onMouseOut={handleAddressMouseOut}
                    >
                      {el}
                    </li>
                  );
                })
              }
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>CAREER CORNER</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>

              {
                our.map((el, index) => {
                  const isHovered = index === ourHoverIndex;
                  const style = {
                    color: isHovered ? '#FFFFFF' : '#999999',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  };

                  return (
                    <li
                      key={el}
                      style={style}
                      onMouseOver={() => handleOurMouseOver(index)}
                      onMouseOut={handleOurMouseOut}
                    >
                      {el}
                    </li>
                  );
                })
              }
            </ul>
          </div>

          <div className="col-sm-4 bg-dark">
            <h5 style={{ color: '#ffffff' }}>OUR BRANDS</h5>
            <ul className="list-unstyled" style={{ color: '#999999' }}>
              {
                brand.map((el, index) => {
                  const isHovered = index === brandHoverIndex;
                  const style = {
                    color: isHovered ? '#FFFFFF' : '#999999',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  };

                  return (
                    <li
                      key={el}
                      style={style}
                      onMouseOver={() => handleBrandMouseOver(index)}
                      onMouseOut={handleBrandMouseOut}
                    >
                      {el}
                    </li>
                  );
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
