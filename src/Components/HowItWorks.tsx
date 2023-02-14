import hiwImg1 from "../media/hiwicon1.png";
import hiwImg2 from "../media/hiwicon2.png";
import hiwImg3 from "../media/hiwicon3.png";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="howitworks-title">
        <h1>How Boomerang Works</h1>
      </div>
      <div className="howitworks-main">
        <div className="howitworks-item">
          <div className="hiw-icon">
            <img src={hiwImg1} alt="arrow-icon" />
          </div>
          <div className="hiw-paragraph">
            <h3>Complete our simple form</h3>
            <p>
              Simply complete our qualifying application to see if you can rent
              a taxi from us.
            </p>
          </div>
        </div>
        <div className="howitworks-item">
          <div className="hiw-icon">
            <img src={hiwImg2} alt="arrow-icon" />
          </div>
          <div className="hiw-paragraph">
            <h3>Rent your new taxi</h3>
            <p>
              If you qualify, simply rent your taxi from us every week for 54
              months.
            </p>
          </div>
        </div>
        <div className="howitworks-item">
          <div className="hiw-icon">
            <img src={hiwImg3} alt="arrow-icon" />
          </div>
          <div className="hiw-paragraph">
            <h3>Buy for just £1!</h3>
            <p>
              Once your term has finished with Boomerang, you can then buy your
              taxi for just £1!
            </p>
          </div>
        </div>
      </div>
      <a href="/">
        <button className="btn-start-blue">START NOW</button>
      </a>
    </section>
  );
}
