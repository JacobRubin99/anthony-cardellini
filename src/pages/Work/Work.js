import React, { Component } from "react";

import { Book } from "../../components/Book/Book";
import { NavigationBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

export class Work extends Component {
  render() {
    return (
      <main>
        <NavigationBar />
        <Book />
        <Footer />
      </main>
    );
  }
}
