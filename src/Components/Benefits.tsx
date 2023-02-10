import React from "react";

export default function Benefits() {
  return (
    <section className="benefits">
      <h1>The benefits of a hybrid taxi</h1>
      <div className="benefit-container">
        <div className="benefit1">
          <p>Comply with clean air zones - avoid being charged</p>
        </div>
        <div className="benefit2">
          <p>Save on road tax</p>
        </div>
        <div className="benefit3">
          <p>Save on fuel</p>
        </div>
        <div className="benefit4">
          <p>Better for the environment</p>
        </div>
        <div className="benefit5">
          <p>Self-charging vehicles - no charging station needed</p>
        </div>
      </div>
      <a href="/">
        <button className="btn benefit-btn">START NOW</button>
      </a>
    </section>
  );
}
