import brakesImg from "../media/extrabenefits/brakes.png";
import coverImg from "../media/extrabenefits/cover.png";
import dashcamImg from "../media/extrabenefits/dashcam.png";
import licenceImg from "../media/extrabenefits/licence.png";
import platesImg from "../media/extrabenefits/plates.png";
import serviceImg from "../media/extrabenefits/service.png";
import trackerImg from "../media/extrabenefits/tracker.png";
import tyreImg from "../media/extrabenefits/tyre.png";
import vatImg from "../media/extrabenefits/vat.png";

export default function ExtraBenefits() {
  return (
    <section className="extra-benefits">
      <div className="extra-benefits-title">
        <h1>The extra benefits</h1>
        <p>
          By renting with Boomerang, we have you covered with the following…
        </p>
      </div>
      <div className="extra-benefits-grid">
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${vatImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>VAT</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${tyreImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Tyre Maintenance</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${serviceImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Servicing</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${brakesImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Brakes and Discs</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${platesImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Vehicle Plating & UBER Ready</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${licenceImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Road Fund Licence</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${trackerImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Tracker</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${coverImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Breakdown Cover</h2>
        </div>
        <div
          className="grid-item"
          style={{
            backgroundImage: `url(${dashcamImg})`,
            height: "107px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Front Dash Cam</h2>
        </div>
      </div>
      <div className="extra-benefits-bottom">
        <h1>
          Hand your vehicle back anytime. There’s no commitment, no financial
          liabilities and <span style={{ color: "red" }}>ZERO</span> exit fees.
        </h1>
      </div>
    </section>
  );
}
