import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <h1>Your new taxi... for a pound?</h1>
      <p>
        Yes, you read that right! Boomerang gives taxi drivers across the UK an
        opportunity to rent a hybrid vehicle - in line with the nation’s clean
        air zones - and buy it for just £1 at the end of your term! All of our
        vehicles comply with the Government’s new environmental strategy, and
        there’s never been an opportunity to rent a brand new taxi and have the
        ability to purchase it for less than the price of a takeaway coffee!
      </p>
      <a href="/">
        <button className="btn intro-btn">START NOW</button>
      </a>
    </section>
  );
}
