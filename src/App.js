import React from "react";
import Navigation from "./components/navigation/Navigation";
import Slider from "./components/slider/Slider";
import Contact from "./components/contact/Contact";
import Offer from "./components/offer/Offer";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Slider />
        <Contact />
        <Offer />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
