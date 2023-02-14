import carImg from "../media/maincars.png";
import mainImg from "../media/mainlogo.svg";
import telegraph from "../media/telegraph.png";
import dropDownIcon from "../media/dropdownicon.png";

export default function Main() {
  return (
    <section className="main-page">
      <div className="main-top">
        <div className="main-logo">
          <a href="/">
            <img src={mainImg} alt="main-logo" />
          </a>
        </div>
        <div className="navbar">
          {/* <button className="dropbtn">
            <img src={dropDownIcon} />
          </button> */}
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
              The Cheapest Taxi <br />
              You've Ever Bought.
            </h1>
            <p>
              With Boomerang, rent a clean-air-compliant hybrid taxi from us,
              then keep it for just £1
            </p>
            <a href="/">
              <button className="btn-start-blue">START NOW</button>
            </a>
          </div>

          {/* <p>
            “To all taxi drivers out there… This is the ‘best route’ for renting
            your vehicle”
          </p>
          <img src={telegraph} alt="telegraph-review" /> */}
        </div>
        <div className="main-image">
          <img src={carImg} alt="cars" className="main-page-cars" />
        </div>
      </div>
    </section>
  );
}
