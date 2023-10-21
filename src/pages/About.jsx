import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import AboutUs from "../components/AboutUs";
import Trusted from "../components/Trusted";
import Visi from "../components/Visi";
import Directur from "../components/Directur";
import Program from "../components/Program";
import DetailBisnis from "../components/DetailBisnis";
import Report from '../components/Report'
import FraudNav from "../components/FraudNav";

const About = () => {
  return (
    <>
      <Navbar />
      <FraudNav/>
      <div className="flex justify-center mx-auto border">
        <AboutUs />
      </div>
      <Trusted />
      <Visi />
      <Directur />
      <Program />
      <DetailBisnis />
      <Report/>
      <div className="-mb-2">
        <Ads />
      </div>
      <Footer />
    </>
  );
};

export default About;
