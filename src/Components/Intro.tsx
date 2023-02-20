import boomerangImg from "../media/introboomerang.png";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-logo">
          <img src={boomerangImg} alt="boomerang-logo" />
        </div>
        <div className="intro-main">
          <div className="intro-paragraph">
            <h1 style={{ fontSize: "30px" }}>
              Your new taxi... for{" "}
              <span style={{ color: "#F6A21E" }}>a pound?</span>
            </h1>
            <p>
              Yes, you read that right! Boomerang gives{" "}
              <strong>taxi drivers across the UK</strong> an opportunity to rent
              a hybrid vehicle -{" "}
              <strong>in line with the nation’s clean air zones</strong> - and
              <strong>buy it for just £1</strong> at the end of your term!
              <br />
              <br />
              All of our vehicles{" "}
              <strong>
                omply with the Government’s new environmental strategy
              </strong>
              c, and there’s never been an opportunity to rent a brand new taxi
              and have the ability to purchase it for{" "}
              <strong>less than the price of a takeaway coffee!</strong>
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
