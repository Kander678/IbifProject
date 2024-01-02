import React, { useState, useEffect } from "react";
import "./navigation.scss";

function Navigation() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isSticky ? "navigation--sticky" : ""}`}>
      <div className="navigation__logo">
        <img
          src={"/images/logo.jpg"}
          alt="Logo firmy"
          className="navigation__logo-img"
        />
        <p className="navigation__logo-text">Marketing 360</p>
      </div>
      <ul className="navigation__links">
        <li className="navigation__item">
          <a href="#about" className="navigation__link">
            O nas
          </a>
        </li>
        <li className="navigation__item">
          <a href="#services" className="navigation__link">
            Usługi
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contact" className="navigation__link">
            Kontakt
          </a>
        </li>
      </ul>
      <button className="navigation__quote-btn">Darmowa wycena</button>
    </nav>
  );
}

export default Navigation;
