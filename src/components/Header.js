import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="nav container">
        <Link to="/">
          <div className="nav__logo">
            <i className="nav__logo-icon"></i>MOVIE
            <span className="nav__logo-icon-span">. APP</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
