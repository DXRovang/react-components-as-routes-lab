import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  color: 'blue'
}

const NavBar = () => {
  return (
    <div>
      <Navlink to="/" exact style={link}>Home</Navlink>
      <Navlink to="/movies" exact style={link}>Movies</Navlink>
      <Navlink to="directors" exact style={link}>Directors</Navlink>
      <Navlink to="actors" exact style={link}>Actors</Navlink>
    </div>
  );
};

export default NavBar;
