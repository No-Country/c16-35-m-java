import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  const openHamburguer = () => {};
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <input
        type="text"
        className="searchbar"
        placeholder="¿Qué quieres aprender hoy?"
      />
      <ul>
        <li>
          <Link to="/signup">Creá tu cuenta</Link>
        </li>
        <li>
          <Link to="login">Ingresá</Link>
        </li>
        <li>
          <Link to="about">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};
