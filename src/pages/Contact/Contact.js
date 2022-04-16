import React, { Component } from "react";

import { ContactForm } from "../../components/ContactForm/ContactForm";
import { NavigationBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
