import { useState } from "react";
import styles from "./Navbar.module.css";

const HamburgerNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="hamburgerNav">
      <div className={styles.hamburgerMenu}>
        <div
          className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
        <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerNav;
