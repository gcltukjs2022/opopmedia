import phoneImg from "../media/phone.png";
import emailImg from "../media/email.png";
import locationImg from "../media/location.png";
import facebookImg from "../media/facebook.png";
import backToTopImg from "../media/backtotop.png";
import opopMediaImg from "../media/opopmedia.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-top-container">
        <a href="tel:01743649888">
          <img src={phoneImg} alt="phoneIcon" />
          <p>01743 649888</p>
        </a>
        <a href="mailto:hello@goboomerang.co.uk">
          <img src={emailImg} alt="emailIcon" />
          <p>hello@goboomerang.co.uk</p>
        </a>
        <a
          href="https://www.google.co.uk/maps/place/12+Yeomanry+Rd,+Shrewsbury+SY1+3EH/@52.7456173,-2.7446852,17z/data=!4m5!3m4!1s0x487a9eb9d5af8e5d:0xd7b84dc66230182e!8m2!3d52.7457179!4d-2.7426837"
          target="blank"
        >
          <img src={locationImg} alt="locationIcon" />
          <p>12 Yeomanry Road, Battlefield, SY1 3EH</p>
        </a>
      </div>
      <hr />
      <div className="footer-middle-container">
        <div className="footer-middle-top">
          <div className="footer-middle-top-item">
            <h3>Head Office</h3>
            <p>12 Yeomanry Road</p>
            <p>Battlefield</p>
            <p>Shrewsbury</p>
            <p>SY1 3EH</p>
          </div>
          <div className="footer-middle-top-item">
            <h3>Enquiries</h3>
            <p>Email: hello@goboomerang.co.uk</p>
            <p>Tel: 01743 649888</p>
          </div>
          <div className="footer-middle-top-item">
            <h3>Locations</h3>
            <p>Birmingham office:</p>
            <p>210 St Vincent St Ladywood</p>
            <p>Birmingham, B16 8RP</p>
          </div>
          <div className="footer-middle-top-item">
            <h3>Newsletter</h3>
            <form>
              <label htmlFor="fname"></label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">SIGN UP</button>
            </form>
            <p>
              Get the latest Boomerang news and offers directly to your inbox!
            </p>
          </div>
        </div>

        <div className="footer-middle-bottom">
          <div className="footer-middle-bottom-details">
            <p>Boomerang Vehicle Rental Limited.</p>
            <p>Company No: 10749488 ICO number: ZA759674</p>
          </div>
          <a
            href="https://www.facebook.com/Boomerang-101222479203724/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-icon"
          >
            <img src={facebookImg} alt="facebook-icon" />
          </a>
          <a href="/#" className="back-to-top-btn">
            <img src={backToTopImg} alt="back-to-top-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-top">
          <p>?? 2021 Boomerang. All rights reserved. Developed by |</p>
          <img src={opopMediaImg} alt="developer-icon" />
        </div>
        <p>Privacy Policy | GDPR Statement | Website Terms and Conditions</p>
      </div>
    </section>
  );
}
