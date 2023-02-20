import { useState } from "react";
import hyundaiImg from "../media/hyundai.png";
import kiaImg from "../media/kia.png";
import leftArrowImg from "../media/carsleftarrow.png";
import rightArrowImg from "../media/carsrightarrow.png";
import hybridImg from "../media/hybrid.png";
import mileage from "../media/mileage.png";
import automatic from "../media/automatic.png";

export default function Cars() {
  const [index, setIndex] = useState(0);
  const images: string[] = [hyundaiImg, kiaImg];
  const model: string[] = ["HYUNDAI Ioniq Hybrid (2019)", "KIA Niro 3 Hybrid"];

  function changePicture(direction: number) {
    let newIndex = index + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex > images.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  return (
    <section className="cars" id="cars">
      <div className="cars-title">
        <h1>Check out our range of hybrid taxis</h1>
      </div>
      <div className="cars-card-container">
        <div className="cars-card-arrow">
          <button className="btn-cars" onClick={() => changePicture(-1)}>
            <img src={leftArrowImg} alt="left-arrow-icon" />
          </button>
        </div>
        <div className="cars-card">
          <div className="cars-card-details">
            <div className="cars-card-details-main">
              <h3>{model[index]}</h3>
              <p>Term: 54 Months</p>
              <p>Initial: £500 (inc. VAT)</p>
              <p>Deposit: £500</p>
            </div>
            <div className="cars-card-details-middle">
              <h3>£230 Per week</h3>
            </div>
            <div className="cars-card-details-bottom">
              <div className="cars-card-details-bottom-item">
                <img src={hybridImg} alt="hybrid-icon" />
                <p>Hybrid</p>
              </div>
              <div className="cars-card-details-bottom-item">
                <img src={mileage} alt="mileage-icon" />
                <p>
                  Uncapped
                  <br /> Mileage*
                </p>
              </div>
              <div className="cars-card-details-bottom-item">
                <img src={automatic} alt="automatic-icon" />
                <p>Automatic</p>
              </div>
            </div>
          </div>
          <div className="cars-card-img">
            <img src={images[index]} className="car-image" alt="hyundaiImage" />
          </div>
        </div>
        <div className="cars-card-arrow">
          <button className="btn-cars" onClick={() => changePicture(1)}>
            <img src={rightArrowImg} alt="right-arrow-icon" />
          </button>
        </div>
      </div>
      <p>*Uncapped mileage is up to 800 miles per week</p>
      <a href="/">
        <button className="btn-start-orange">ENQUIRE NOW</button>
      </a>
    </section>
  );
}
