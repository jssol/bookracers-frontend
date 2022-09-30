import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/logoutSlice';
import './navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const isAdmin = localStorage.getItem('isAdmin');

  return (
    <nav className="navbar desktop-sidebar">
      <div className="logo-container">
        <Link to="/categories">
          <p className="logo-name">BookRacers</p>
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/categories"
            >
              CATEGORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/my_reservations"
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
            <button type="button" className="logoutBtn" onClick={clickHandler}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
      <br />
      <p className="copyright">&copy; Racers@Microverse 2022</p>
    </nav>
  );
};

export default Navbar;
