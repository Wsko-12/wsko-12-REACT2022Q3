import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header-nav.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="header-nav">
        <NavLink end to="/" className="link header-nav__link">
          Main
        </NavLink>
        <NavLink to="/about" className="link header-nav__link">
          About us
        </NavLink>
      </nav>
    );
  }
}
