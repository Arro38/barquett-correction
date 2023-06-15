import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className=" flex items-center justify-center gap-4 p-4 bg-black text-white rounded-md">
        <li>
          <NavLink className="hover:text-teal-500" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-500" to="/edit">
            Créer
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-500" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
