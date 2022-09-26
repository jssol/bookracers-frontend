import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

export default function Toggle() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose />
        ) : (
          <FiMenu />
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
          Add Category
        </li>
        <li>
          Reservations
        </li>
      </ul>
    </nav>
  );
}
