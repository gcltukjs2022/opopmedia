import React from "react";
import Apply from "./Apply";
import Benefits from "./Benefits";
import Cars from "./Cars";
import Compliance from "./Compliance";
import ExtraBenefits from "./ExtraBenefits";
import FAQ from "./FAQ";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import Intro from "./Intro";
import Main from "./Main";
import NavBar from "./NavBar";
import Reviews from "./Reviews";

export default function Home() {
  return (
    <div>
      <section className="home">
        <NavBar />
        <Main />
        <Intro />
        <Footer />
        <ExtraBenefits />
        <HowItWorks />
        <Benefits />
        <Apply />
        <Cars />
        <Compliance />
        <Reviews />
        <FAQ />
      </section>
    </div>
  );
}
