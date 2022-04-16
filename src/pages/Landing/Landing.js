import React, { Component } from "react";

import { NavigationBar } from "../../components/Navbar/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxExample } from "../../components/ParallaxExample/ParallaxExample";
import { Footer } from "../../components/Footer/Footer";

export class Landing extends Component {
  render() {
    return (
      <main>
        <NavigationBar />
        <ParallaxProvider>
          <ParallaxExample />
        </ParallaxProvider>
        <Footer />
      </main>
    );
  }
}
