import React from "react";

export default function Apply() {
  return (
    <section className="apply">
      <div className="apply-title">
        <h2>To apply, all you need is TWO things</h2>
      </div>
      <div className="apply-cards">
        <div className="apply-cards card">
          <h3>1. Driving Licence</h3>
          <p>
            In order to drive a Boomerang vehicle or any other private hire /
            non-standard private hire, you MUST hold a valid UK Driving Licence.
          </p>
        </div>
        <div className="apply-cards card">
          <h3>2. Taxi Licence</h3>
          <p>
            This is the licence that allows you to operate and work as a taxi
            driver in the UK. Your licence may look similar to the example (top
            left).
          </p>
        </div>
      </div>
    </section>
  );
}
