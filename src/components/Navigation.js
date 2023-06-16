import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken("");
  };
  return (
    <nav>
      <ul className=" flex items-center justify-center gap-4 p-4 bg-black text-white rounded-md">
        <li>
          <NavLink className="hover:text-teal-500" to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-500" to="/edit">
            Créer
          </NavLink>
        </li>
        {token ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="hover:text-teal-500" to="/login">
                Se connecter
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-teal-500" to="/register">
                S'inscrire
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
