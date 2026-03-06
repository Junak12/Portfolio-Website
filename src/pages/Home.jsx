import React from "react";
import Hero from "../components/Hero";
import Hobbies from "../components/Hobbies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />

      {/* Hobbies Section */}
      <div className="mt-20">
        <Hobbies />
      </div>

      {/* Projects Section */}
      <div className="mt-10">
        <Projects />
      </div>

      {/* Achievements Section */}
      <div className="mt-10">
        <Achievements />
      </div>

      {/* Contact Section */}
      <div className="mt-10">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
