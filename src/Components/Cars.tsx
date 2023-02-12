import hyundaiImg from "../media/hyundai.png";
import KiaImg from "../media/kia.png";
import leftArrowImg from "../media/carsleftarrow.png";
import rightArrowImg from "../media/carsrightarrow.png";
import hybridImg from "../media/hybrid.png";
import mileage from "../media/mileage.png";
import automatic from "../media/automatic.png";

export default function Cars() {
  return (
    <section className="cars">
      <div className="cars-title">
        <h3>Check out our range of hybrid taxis</h3>
      </div>
      <div className="cars-card-container">
        <div className="cars-card-arrow">
          <img src={leftArrowImg} alt="left-arrow-icon" />
        </div>
        <div className="cars-card">
          <div className="cars-card-details-container">
            <div className="cars-card-details">
              <div className="cars-card-details-main">
                <h3>HYUNDAI Ioniq Hybrid (2019)</h3>
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
                  <p>Uncapped Mileage*</p>
                </div>
                <div className="cars-card-details-bottom-item">
                  <img src={automatic} alt="automatic-icon" />
                  <p>Automatic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cars-card-img">
            <img src={hyundaiImg} alt="hyundaiImage" />
          </div>
        </div>
        <div className="cars-card-arrow">
          <img src={rightArrowImg} alt="right-arrow-icon" />
        </div>
      </div>
      {/* <div className="cars-card-container">
        <div className="cars-card">
          <div className="cars-card-details">
            <h3>KIA Niro 3 Hybrid</h3>
            <p>Term: 54 Months</p>
            <p>Initial: £500 (inc. VAT)</p>
            <p>Deposit: £500</p>
            <h3>£230 Per week</h3>
          </div>
          <div className="cars-card-img">
            <img src={KiaImg} alt="kiaImage" />
          </div>
        </div>
      </div> */}
      <p>*Uncapped mileage is up to 800 miles per week</p>
      <a href="/">
        <button className="btn cars-btn">ENQUIRE NOW</button>
      </a>
    </section>
  );
}
