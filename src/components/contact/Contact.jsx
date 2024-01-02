import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="/images/zdjecie3.jpg" alt="Contact" />
      </div>
      <div className="contact-text">
        <div className="bar-container">
          <div className="bar"></div>
          <p className="text">O nas</p>
        </div>

        <h3 className="contact-text__title">
          Jesteśmy agencją, która sprosta Twoim wymaganiom!
        </h3>
        <p className="contact-text__description">
          Zajmujemy się wszelkimi działaniami w dziedzinie promowania stron www
          w sieci, zakładania prostych wizytówek i rozbudowanych portali oraz
          nadzorowania ich rozwoju, funkcjonowania i treści, jakie się na nich
          pojawiają. Lubelska agencja marketingowa IBIF doskonale sprawdza się
          przy współpracy z firmami z całego kraju, komunikując się z klientami
          na wiele sposobów.
        </p>
        <Link
          to="/contact-form"
          className="contact-btn"
          onClick={scrollToContactForm}
        >
          Skontaktuj się
        </Link>
      </div>
    </div>
  );
};

export default Contact;
