import clearAirZoneImg from "../media/benefits/cleanairzone.png";
import roadTaxImg from "../media/benefits/roadtax.png";
import fuelImg from "../media/benefits/fuel.png";
import enviornmentImg from "../media/benefits/enviornment.png";
import chargingImg from "../media/benefits/charging.png";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-title">
        <h1>The benefits of a hybrid taxi</h1>
      </div>
      <div className="benefits-main">
        <div className="benefits-item">
          <img src={clearAirZoneImg} alt="clean-air-zone-icon" />
          <p>Comply with clean air zones - avoid being charged</p>
        </div>
        <div className="benefits-item">
          <img src={roadTaxImg} alt="road-tax-icon" />
          <p>Save on road tax</p>
        </div>
        <div className="benefits-item">
          <img src={fuelImg} alt="fuel-icon" />
          <p>Save on fuel</p>
        </div>
        <div className="benefits-item">
          <img src={enviornmentImg} alt="enviornment-icon" />
          <p>Better for the environment</p>
        </div>
        <div className="benefits-item">
          <img src={chargingImg} alt="charging-icon" />
          <p>Self-charging vehicles - no charging station needed</p>
        </div>
      </div>
      <div className="benefits-button">
        <a href="/">
          <button className="btn-start-orange">START NOW</button>
        </a>
      </div>
    </section>
  );
}
