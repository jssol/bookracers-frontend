import { Outlet, NavLink } from 'react-router-dom';
import '../assets/styles/Registration.scss';

const Registration = () => (
  <main className="registration-page">
    <nav className="registration-page-nav">
      <ul className="registration-page-nav-list">
        <li className="registration-page-nav-list-item">
          <NavLink to="">Sign In</NavLink>
        </li>
        <li className="registration-page-nav-list-item">
          <NavLink to="sign-up">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
    <section className="registration-page-outlet">
      <Outlet />
    </section>
  </main>
);

export default Registration;
