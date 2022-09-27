import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { logout } from '../../redux/user/logoutSlice';
import './toggle.scss';

export default function Toggle() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const clickHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navBar toggle">
      <button type="button" className="btn" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose className="closebtn" />
        ) : (
          <FiMenu className="listbtn" />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li className="book-racerlink">
          <Link
            to="/"
          >
            BookRacers
          </Link>
        </li>

        <li>
          <NavLink
            to="/categories"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            RACERS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/myreservations"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            My Reservations
          </NavLink>
        </li>

        <li>

          <NavLink
            to="/add_motorcycle"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Add Motorcycle
          </NavLink>
        </li>

        <li>

          <NavLink
            to="/add_category"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Add Category
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/delete_motorcycle"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Delete a Motorcycle
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/delete_category"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Delete a Category
          </NavLink>
        </li>

        <li>
          <button type="button" className="logout" onClick={clickHandler}>
            LOGOUT
          </button>
        </li>
      </ul>
    </nav>
  );
}
