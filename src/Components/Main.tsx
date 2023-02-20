import carImg from "../media/maincars.png";
import mainImg from "../media/mainlogo.svg";

export default function Main() {
  setTimeout(function () {
    document.querySelector(".full-screen-animation")!.remove();
  }, 3000);

  return (
    <section className="main-page">
      <div className="full-screen-animation">
        <div className="full-screen-animation-logo">
          <img src={mainImg} alt="main-logo" />
        </div>
      </div>
      <div className="main-top">
        <div className="main-logo">
          <a href="/">
            <img src={mainImg} alt="main-logo" />
          </a>
        </div>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-item">
              <a className="btn active" href="/">
                Home
              </a>
            </div>
            <div className="navbar-item">
              <a className="btn" href="/#cars">
                Our cars
              </a>
            </div>
            <div className="navbar-item">
              <a className="btn" href="/#faq">
                FAQs
              </a>
            </div>
            <div className="navbar-item">
              <a className="btn" href="/#">
                Contacts us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="main-title">
            <h1>
              The <u>Cheapest</u> Taxi <br />
              You've <u>Ever</u> Bought.
            </h1>
            <p>
              With Boomerang, rent a clean-air-compliant hybrid taxi from us,
              then keep it for just £1
            </p>
            <br />
            <a href="https://www.google.com">
              <button className="btn-start-blue">START NOW</button>
            </a>
          </div>

          <div className="main-image">
            <img src={carImg} alt="cars" className="main-image-cars" />
          </div>
        </div>
      </div>
    </section>
  );
}
