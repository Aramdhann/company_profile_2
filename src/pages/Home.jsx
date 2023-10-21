import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import Why from '../components/Why'
import QuickStep from "../components/QuickStep";
import Milestone from "../components/Milestone";
import ServiceHour from "../components/ServiceHour";
import Footer from "../components/Footer";
import Ads from "../components/Ads";
import FraudNav from "../components/FraudNav";

const Home = () => {
  return (
    <>
      <Navbar />
      <FraudNav/>
      <Hero />
      <Trusted/>
      <Why/>
      <QuickStep/>
      <Milestone/>
      <Ads/>
      <ServiceHour/>
      <Footer/>
    </>
  );
};

export default Home;
