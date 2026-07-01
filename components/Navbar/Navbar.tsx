import { useState } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import { navigationLinks } from "../../utils/constants";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__brand">
          <div className="navbar__mark">A</div>
          <div>
            <p className="navbar__title">Amutha Sidha</p>
            <p className="navbar__subtitle">Maruthuvam & Yoga</p>
          </div>
        </a>

        <nav className="navbar__links">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="tel:9442079012" className="navbar__phone">
            <FiPhoneCall /> 94420 79012
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <div className="navbar__mobile-inner">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:9442079012" className="navbar__mobile-cta">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
