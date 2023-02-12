import React from "react";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-title">
        <h1>What taxi drivers are saying</h1>
        <p>
          Don’t just take our word for it, see why Boomerang is the go-to
          provider for taxi rental across the UK!
        </p>
      </div>
      <div className="reviews-card"></div>
      <a href="/">
        <button className="btn intro-btn">START NOW</button>
      </a>
    </section>
  );
}
