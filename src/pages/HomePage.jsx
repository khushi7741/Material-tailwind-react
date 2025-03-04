import React from "react";
import Home from "../components/homepage/Home";
import CompanyInfo from "../components/homepage/CompanyInfo";
import About from "../components/homepage/About";
import Team from "../components/homepage/Team";
import CoWorking from "../components/homepage/CoWorking";
import Contact from "../components/homepage/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="text-black/80 font-fontRoboto">
      <Home />
      <CompanyInfo />
      <About />
      <Team />
      <CoWorking />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
