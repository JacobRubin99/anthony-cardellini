import "./App.css";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxExample } from "../ParallaxExample/ParallaxExample";
import { Footer } from "../Footer/Footer";

export default function App() {
  return (
    <main>
      <ParallaxProvider>
        <ParallaxExample />
      </ParallaxProvider>
      <Footer />
    </main>
  );
}
