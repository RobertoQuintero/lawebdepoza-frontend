import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navigation">
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
          to="/"
        >
          <span>
            <i className="navigation__link-icon fas fa-home"></i>
          </span>
          <span className="navigation__link-text">Inicio</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
          to="/categories"
        >
          <span>
            <i className="navigation__link-icon fas fa-book"></i>
          </span>
          <span className="navigation__link-text">Categorías</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
          to="/search"
        >
          <span>
            <i className="navigation__link-icon fas fa-search"></i>
          </span>
          <span className="navigation__link-text">Buscar</span>
        </NavLink>
        <div className="indicator"></div>
      </div>
    </nav>
  );
};
