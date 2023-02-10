import React from "react";
import car from "../media/hero-cars-mobile.71a6ba8f42f8c5dcd6bc.png";

export default function Main() {
  return (
    <section className="main-page">
      <h1>The Cheapest Taxi You've Ever Bought.</h1>
      <h2>
        With Boomerang, rent a clean-air-compliant hybrid taxi from us, then
        keep it for just £1
      </h2>
      <img src={car} alt="cars" className="main-page-cars" />
    </section>
  );
}
