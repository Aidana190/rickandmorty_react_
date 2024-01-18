import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;

//NavLink принимает 1 параметр - to
