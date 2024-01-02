import React, { useState } from "react";
import "./contactForm.scss";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      email,
      phoneNumber,
      subject,
      message,
      acceptTerms,
    });
  };

  return (
    <div className="contact-form" id="contact-form">
      <div className="contact-form__container">
        <h2 className="contact-form__title">Formularz kontaktowy</h2>
        <p className="contact-form__description">
          Napisz do nas, z chęcią odpowiemy na każde pytanie!
        </p>
        <form onSubmit={handleSubmit} className="contact-form__form">
          <label className="contact-form__label">Email:</label>
          <input
            className="contact-form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Podaj swój adres email"
            required
          />

          <label className="contact-form__label">Numer telefonu:</label>
          <input
            className="contact-form__input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Podaj swój numer telefonu"
            required
            pattern="\d{9}"
            title="Numer telefonu musi posiadać 9 cyfr"
          />

          <label className="contact-form__label">Temat:</label>
          <select
            className="contact-form__select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="" disabled hidden>
              Wybierz temat
            </option>
            <option value="Zapytanie o prace">Zapytanie o prace</option>
            <option value="Oferta współpracy">Oferta współpracy</option>
            <option value="Skarga">Skarga</option>
          </select>

          <label className="contact-form__label">Wiadomość:</label>
          <textarea
            className="contact-form__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Treść wiadomości"
            required
          />

          <label className="contact-form__checkbox-label">
            <input
              className="contact-form__checkbox"
              type="checkbox"
              required
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            Akceptuje politykę prywatności
          </label>

          <button className="contact-form__button" type="submit">
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
