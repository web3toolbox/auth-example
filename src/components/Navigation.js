import { useState } from 'react';
import {
  Link
} from "react-router-dom";


const Navigation = () => {
    const [navIsActive, setNavIsActive] = useState(false);
  
    return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Discover</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;