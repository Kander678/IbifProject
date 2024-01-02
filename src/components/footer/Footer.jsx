import React from "react";
import "./footer.scss";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          src={"/images/logo.jpg"}
          alt="Logo firmy"
          className="footer__logo-img"
        />
        <p className="footer__logo-text">Marketing 360</p>
      </div>
      <div className="footer__contact-info">
        <div className="footer__phone-email">
          <div className="footer__contact footer__contact--phone">
            <span className="footer__info">Telefon:</span>
            <span className="footer__blue-dot">&#8226;</span>
            <span className="footer__info">505-551-616</span>
          </div>
          <div className="footer__contact footer__contact--email">
            <span className="footer__info">Email:</span>
            <span className="footer__blue-dot">&#8226;</span>
            <span className="footer__info">biuro@ibif.pl</span>
          </div>
        </div>
      </div>
      <div className="footer__back-to-top-btn" onClick={scrollToTop}>
        ^
      </div>
    </footer>
  );
}

export default Footer;
