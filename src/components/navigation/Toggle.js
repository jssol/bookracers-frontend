import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './toggle.scss';

export default function Toggle() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar toggle">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose className="closebtn" />
        ) : (
          <FiMenu className="listbtn" />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <Link
            to="/"
          >
            Book Racers
          </Link>
        </li>
        <li>

          <NavLink
            to="/"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Add Motorcycle
          </NavLink>
        </li>

        <li>

          <NavLink
            to="/"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >

            Add Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Reservations
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            New Reservations
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}
