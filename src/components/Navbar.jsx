import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../Style.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className="navbar">
        <BiCoinStack className="icon" />
        <h1>
          Coin <span className="orange">Search</span>{" "}
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
