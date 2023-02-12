import drivingLicenceImg from "../media/drivinglicence.png";
import taxiLicenceImg from "../media/taxilicence.png";

export default function Apply() {
  return (
    <section className="apply">
      <div className="apply-title">
        <h2>To apply, all you need is TWO things</h2>
      </div>
      <div className="apply-main">
        <div className="apply-card">
          <div className="apply-card-icon">
            <img src={drivingLicenceImg} alt="driving-licence-imgage" />
          </div>
          <div className="apply-card-main">
            <div className="apply-card-main-title">
              <h3>1. Driving Licence</h3>
            </div>
            <div className="apply-card-main-paragraph">
              <p>
                In order to drive a Boomerang vehicle or any other private hire
                / non-standard private hire, you <strong>MUST</strong> hold a
                valid UK Driving Licence.
              </p>
            </div>
          </div>
        </div>
        <div className="apply-card">
          <div className="apply-card-icon">
            <img src={taxiLicenceImg} alt="taxi-licence-imgage" />
          </div>
          <div className="apply-card-main">
            <div className="apply-card-main-title">
              <h3>2. Taxi Licence</h3>
            </div>
            <div className="apply-card-main-paragraph">
              <p>
                This is the licence that allows you to operate and work as a
                taxi driver in the UK. Your licence may look similar to the
                example (top left).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
