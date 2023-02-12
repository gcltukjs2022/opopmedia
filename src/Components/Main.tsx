import car from "../media/maincars.png";
import mainLogo from "../media/mainlogo.svg";

export default function Main() {
  return (
    <section className="main-page">
      <div className="main-logo">
        <a href="/">
          <img src={mainLogo} alt="main-logo" />
        </a>
      </div>
      <h1>The Cheapest Taxi You've Ever Bought.</h1>
      <p>
        With Boomerang, rent a clean-air-compliant hybrid taxi from us, then
        keep it for just £1
      </p>
      <img src={car} alt="cars" className="main-page-cars" />
    </section>
  );
}
