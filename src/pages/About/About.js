import React, { Component } from "react";

import { NavigationBar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import headshot from "../../images/bg-1.png";
import "./About.css";

export class About extends Component {
  render() {
    return (
      <main>
        <NavigationBar />
        <div className="about-container">
          <img
            src={headshot}
            class="headshot"
            alt="Headshot"
            aria-label="Anthony headshot"
          ></img>
          <div className="text-area">
            <h1 className="title">About me</h1>
            <p>
              I've always introduced myself as an illustrator and a presentation
              designer, exploring innovative storytelling and bringing delight
              to presentations. And I am those things, I’m also much more. I’m
              more than a limited character count and a filtered photo to be
              found in the void of social media. I’m a designer, an illustrator,
              a presentation wizard, a storyteller, a photographer, a motion
              designer, a teacher, and a lifetime student.
            </p>
            <p>
              I’m an optimist. I’m a feminist. I’m an environmentalist. I’m now
              a Texan with a passion for seeing all parts of the world. You can
              find me frequenting the pasta aisle. You can find me, finding
              balance on the yoga mat. I worry I won’t be able to read all the
              books I want in this lifetime.
            </p>
            <p>Anthony</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
