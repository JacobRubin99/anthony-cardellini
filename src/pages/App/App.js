import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Landing } from "../Landing/Landing";
import { About } from "../About/About";
import { Work } from "../Work/Work";
import { Contact } from "../Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
