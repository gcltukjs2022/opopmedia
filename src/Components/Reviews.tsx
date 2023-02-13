import review1 from "../media/review1.png";
import review2 from "../media/review2.png";
import review3 from "../media/review3.png";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-title">
        <h1>What taxi drivers are saying</h1>
        <p>
          Don’t just take our word for it, see why Boomerang is the go-to
          provider for taxi rental across the UK!
        </p>
      </div>
      <div className="reviews-card-container">
        <div className="reviews-card">
          <div className="reviews-card-details">
            <p>
              “Boomerang is the ultimate for cabbies. Really friendly people and
              couldn’t believe how quick the process was in renting a cab. The
              fact I can buy my car for £1 at the end of my term is just unreal!
              Thanks a million”
            </p>
          </div>
          <div className="reviews-card-name">
            <p>Gavin, Taxi Driver in London</p>
          </div>
          <div className="reviews-card-image">
            <img src={review1} alt="reviewer" />
          </div>
        </div>
        <div className="reviews-card">
          <div className="reviews-card-details">
            <p>
              “Fantastic service from Boomerang. Quick and easy process and I
              was able to rent a taxi in no time to start making money!”
            </p>
          </div>
          <div className="reviews-card-name">
            <p>Grant, Taxi Driver in Manchester</p>
          </div>
          <div className="reviews-card-image">
            <img src={review2} alt="reviewer" />
          </div>
        </div>
        <div className="reviews-card">
          <div className="reviews-card-details">
            <p>
              “Quick. Simple. Easy. A few checks and you’re in with renting a
              taxi. Really pleased with the term, plus the £1 payment at the end
              is just brilliant and really unique…”
            </p>
          </div>
          <div className="reviews-card-name">
            <p>Carl, Taxi Driver in Stockport</p>
          </div>
          <div className="reviews-card-image">
            <img src={review3} alt="reviewer" />
          </div>
        </div>
      </div>
      <a href="/">
        <button className="btn intro-btn">START NOW</button>
      </a>
    </section>
  );
}
