import boomerangImg from "../media/introboomerang.png";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-logo">
          <img src={boomerangImg} alt="boomerang-logo" />
        </div>
        <div className="intro-main">
          <div className="intro-title">
            <h1>Your new taxi... for a pound?</h1>
          </div>
          <div className="intro-paragraph">
            <p>
              Yes, you read that right! Boomerang gives taxi drivers across the
              UK an opportunity to rent a hybrid vehicle - in line with the
              nation’s clean air zones - and buy it for just £1 at the end of
              your term!
              <br />
              All of our vehicles comply with the Government’s new environmental
              strategy, and there’s never been an opportunity to rent a brand
              new taxi and have the ability to purchase it for less than the
              price of a takeaway coffee!
            </p>
          </div>
          <div className="intro-button">
            <a href="/">
              <button className="btn-start-orange">START NOW</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
