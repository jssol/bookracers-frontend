import { Outlet, NavLink } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import '../assets/styles/Register.scss';

const Registration = () => (
  <main className="registration-page-container">
    <Header />
    <section className="registration-page">
      <section className="registration-page-content">
        <nav className="registration-page-nav">
          <ul className="registration-page-nav-list">
            <li>
              <NavLink to="login" className="registration-page-nav-list-item">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="signup" className="registration-page-nav-list-item">
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="registration-page-outlet">
          <Outlet />
        </section>
      </section>
    </section>
    <Footer />
  </main>
);

export default Registration;
