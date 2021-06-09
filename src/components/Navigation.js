import {
    Link
  } from "react-router-dom";

const Navigation = ({ openLoginModal }) => {
    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
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
              <a className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a onClick={() => openLoginModal(true)} class="button is-primary">
                  <strong>Login</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;