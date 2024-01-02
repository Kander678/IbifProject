import React from "react";
import "./offer.scss";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="container">
        <div className="bar-container">
          <div className="bar"></div>
          <p>Usługi</p>
        </div>
        <div className="oferta">
          <h3>Co możemy ci zaoferować?</h3>
        </div>
      </div>

      <div className="service-section" id="websites">
        <img src="/images/Zdjecie4.jpg" alt="BoxFoto" />
        <h2>Strony WWW</h2>
        <p>
          Budujemy przejrzyste, nowoczesne i estetyczne serwisy WWW dostosowane
          do urządzeń mobilnych.
        </p>
      </div>
      <div className="service-section" id="online-store">
        <img src="/images/Zdjecie5.jpg" alt="BoxFoto" />
        <h2>Sklep Internetowy</h2>
        <p>
          Funkcjonalne, użyteczne i responsywne sklepy to nasza specjalność.
        </p>
      </div>
      <div className="service-section" id="seo">
        <img src="/images/Zdjecie6.jpg" alt="BoxFoto" />
        <h2>Pozycjonowanie</h2>
        <p>Skutecznie przyciągamy uwagę Twoich potencjalnych klientów.</p>
      </div>
    </div>
  );
};

export default Offer;
