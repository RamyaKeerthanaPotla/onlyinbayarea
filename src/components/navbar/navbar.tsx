import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/signup">
        Sign Up
      </Link>

      <Link className="navbar-brand" to="/login">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
