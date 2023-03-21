import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Collapse } from 'react-bootstrap';

function OurVisionComponent({PointHeading,Point}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="rounded-5 text-center p-3 m-2"
      style={{
        cursor: 'pointer',
        // border: 'none',
        borderStyle: isOpen ? 'solid' : 'dotted',
        // borderStyle: 'dotted',
        borderWidth: '2px',
        borderColor: isOpen ? 'rgb(230, 124, 30)' : '#ccc',
        backgroundColor: 'white',
        transition: 'all 0.5s ease',
      }}
      onClick={handleOnClick}
    >
      <h4 className="mb-0">{PointHeading}</h4>
      <FiChevronDown
        className="mt-0"
        size={24}
        style={{
          transform: isOpen ? 'rotate(180deg)' : '',
          transition: 'transform 0.5s ease',
        }}
      />
      <Collapse in={isOpen}>
        <div
          className="pt-3 pb-1 rounded-3"
          style={{ backgroundColor: '#f0f0f0'}}
        >
          <p style={{ backgroundColor: isOpen ? '#f0f0f0' : '' }}>
           {Point}
          </p>
        </div>
      </Collapse>
    </div>
  );
}

export default OurVisionComponent;
