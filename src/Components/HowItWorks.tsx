import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="howitworks-title">
        <h1>How Boomerang Works</h1>
      </div>
      <div className="howitworks-container">
        <div className="howitworks1">
          <h3>Complete our simple form</h3>
          <p>
            Simply complete our qualifying application to see if you can rent a
            taxi from us.
          </p>
        </div>
        <div className="howitworks2">
          <h3>Rent your new taxi</h3>
          <p>
            If you qualify, simply rent your taxi from us every week for 54
            months.
          </p>
        </div>
        <div className="howitworks3">
          <h3>Buy for just £1!</h3>
          <p>
            Once your term has finished with Boomerang, you can then buy your
            taxi for just £1!
          </p>
        </div>
      </div>
      <a href="/">
        <button className="btn hiw-btn">START NOW</button>
      </a>
    </section>
  );
}
