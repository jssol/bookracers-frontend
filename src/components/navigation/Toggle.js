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

  const isAdmin = localStorage.getItem('isAdmin');

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
          <Link to="/categories">BookRacers</Link>
        </li>

        <li>
          <NavLink
            to="/categories"
            className="active-link"
            onClick={() => closeMenu()}
            exact="true"
          >
            RACERS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/my_reservations"
            className="active-link"
            onClick={() => closeMenu()}
            exact="true"
          >
            My Reservations
          </NavLink>
        </li>

        {isAdmin === 'true' && (
          <>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? 'active link' : 'link')}
                to="/add_category"
              >
                Add Category
              </NavLink>
            </li>
          </>
        )}

        <li>
          <button type="button" className="logout" onClick={clickHandler}>
            LOGOUT
          </button>
        </li>
        <br />
        <p className="copyright" style={{ color: '#fff' }}>
          &copy; Racers@Microverse 2022
        </p>
      </ul>
    </nav>
  );
}
