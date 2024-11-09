import React from "react";
import FontToggle from "./FontToggle"; // Import the dyslexia toggle
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current route location
  const isActive = (link: string) => location.pathname === link;

  const om_classes = isActive("/om")
    ? "navbar-item has-text-weight-light is-tab is-active"
    : "navbar-item has-text-weight-light is-tab";

  const kilder_classes = isActive("/kilder")
    ? "navbar-item has-text-weight-light is-tab is-active"
    : "navbar-item has-text-weight-light is-tab";

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>DCST1002</strong> {/* Replace with your site name or logo */}
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a className={om_classes} href="/om">
            Om
          </a>

          {/* Citations page */}
          <a className={kilder_classes} href="/kilder">
            Kilder
          </a>
          <div className="navbar-item">
            <FontToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
