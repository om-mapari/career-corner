import React from 'react';
import { Link } from 'react-router-dom';

const HoverLink = ({ to, children }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link
      to={to}
      className="nav-link"
      style={{
        textDecoration: 'none',
        borderBottom: `2px solid ${hovered ? 'black' : 'transparent'}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
    </Link>
  );
};

export default HoverLink