import React from "react";
import hyundaiImg from "../media/hyundai.png";
import KiaImg from "../media/kia.png";

export default function Cars() {
  return (
    <section className="cars">
      <div className="cars-title">
        <h3>Check out our range of hybrid taxis</h3>
      </div>
      <div className="cars-card">
        <img src={hyundaiImg} alt="hyundaiImage" />
        <p>HYUNDAI Ioniq Hybrid (2019)</p>
        <h3>£230 Per week</h3>
      </div>
      <div className="cars-card">
        <img src={KiaImg} alt="kiaImage" />
        <p>KIA Niro 3 Hybrid</p>
        <h3>£230 Per week</h3>
      </div>
      <a href="/">
        <button className="btn cars-btn">ENQUIRE NOW</button>
      </a>
    </section>
  );
}
