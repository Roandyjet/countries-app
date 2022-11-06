import React from "react";
import { NavLink } from "react-router-dom";
const navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          end
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          end
        >
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default navigation;
