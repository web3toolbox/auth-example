import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({
  openLoginModal,
  openSubscriptionModal,
  subscriptionExpiration,
}) => {
  const [navBurgerActive, toggleNavburgerActive] = useState(false);
  const expiresOn = new Date(
    subscriptionExpiration && Number(subscriptionExpiration)
  ).toDateString();
  const renderLoginButton = () => {
    if (subscriptionExpiration) {
      if (subscriptionExpiration > 1) {
        return (
          <a
            onClick={() => openSubscriptionModal(true)}
            class="button is-primary"
          >
            <strong>Subscribed until {expiresOn}</strong>
          </a>
        );
      } else {
        return (
          <a
            onClick={() => openSubscriptionModal(true)}
            class="button is-primary"
          >
            <strong>View Account</strong>
          </a>
        );
      }
    } else {
      return (
        <a onClick={() => openLoginModal(true)} class="button is-primary">
          <strong>Login</strong>
        </a>
      );
    }
  };

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
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" style={{fontFamily: 'Bitter', fontSize: '40px'}} to="/">
            Decentral Times
          </Link>
          <Link class="navbar-item" to="/trends">
            Trends
          </Link>
          <Link class="navbar-item" to="/charts">
            Charts
          </Link>
          <Link class="navbar-item" to="/comments">
            Comments
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
            <div class="buttons">{renderLoginButton()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
