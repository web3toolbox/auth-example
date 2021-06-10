import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ openLoginModal, mmSignature }) => {
  const [navBurgerActive, toggleNavburgerActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io"></a>
        <a
          role="button"
          className={`navbar-burger ${navBurgerActive ? "is-active" : ""}`}
          onClick={() => {
            toggleNavburgerActive(!navBurgerActive);
          }}
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div
          class={`navbar-menu ${navBurgerActive ? "is-active" : ""}`}
          id="navMenu"
        >
          <div class="navbar-start">
              { mmSignature ? 
              <a class="navbar-item">
                My Account
              </a> : 
              <a class="navbar-item" onClick={() => {openLoginModal(true)}}>
                Login
              </a>
             }
            </div>
            <div class="navbar-end"></div>
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" to="/">
            Home
          </Link>
          <Link class="navbar-item" to="/trends">
            Trends
          </Link>
          <Link class="navbar-item" to="/charts">
            Charts
          </Link>
          <Link class="navbar-item" to="/events">
            Events
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Contact</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {mmSignature ? (
                <a onClick={() => {}} class="button is-primary">
                  <strong>View Account</strong>
                </a>
              ) : (
                <a
                  onClick={() => openLoginModal(true)}
                  class="button is-primary"
                >
                  <strong>Login</strong>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
