import React from 'react';
import { NavLink } from 'react-router-dom';

const HoverNavLink = ({ to, children, isActive }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <NavLink
      exact="true"
      to={to}
      className="nav-link m-1"
      style={{
        textDecoration: 'none',
        borderBottom: `2px solid ${hovered || isActive ? 'black' : 'transparent'}`,
        fontWeight: isActive ? 'bold' : 'normal',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
    </NavLink>
  );
};

export default HoverNavLink