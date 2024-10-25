import React from 'react';
import FontToggle from './FontToggle'; // Import the dyslexia toggle

const Navbar: React.FC = () => {
  return (
    <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>DCST1002</strong> {/* Replace with your site name or logo */}
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">

          {/* Citations page */}
          <a class="navbar-item has-text-weight-light is-tab" href="/kilder">
            Kilder
          </a>

          {/* <div className="navbar-item"></div> */}
          
          <div className="navbar-item">
            <FontToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
