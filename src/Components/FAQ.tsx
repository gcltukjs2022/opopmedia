import { useState } from "react";
import Question from "./Question";

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-title">
        <h1>Frequently asked questions</h1>
      </div>

      <div className="faq-container">
        <Question
          question="1. How long is the term?"
          answer="Our Rent to Buy scheme is 54 months (4.5 years), and then you have
            the option to purchase the vehicle for just £1! (Yes, one pound, a
            quid, 100 pennies!)"
        />
        <Question
          question="2. How long does it take to get a car?"
          answer="Our aim is to provide you a vehicle within 14 days. Vehicles are
        supplied brand new, too!"
        />
        <Question
          question="3. How much will it cost to rent a taxi?"
          answer="We charge a rate of £230 per week for rental of our vehicles."
        />
        <Question
          question="4. What happens if I want to return my vehicle?"
          answer="No problem at all! Just give us four weeks notice and then return the vehicle to your closest renting location. There are no charges or fees for bringing the vehicle back early."
        />
        <Question
          question="5. Will I own the PCO car at the end of the payment plan?
"
          answer="Yes! Once you have rented the vehicle for 54 months, you have the option to purchase the vehicle for £1, hand it back, or continue to rent. Terms and Conditions do apply."
        />
        <Question
          question="6. Is insurance included?"
          answer="Sorry! This is the only thing we don’t provide. Drivers will be required to arrange their own PCO-compliant comprehensive insurance, prior to picking up the car."
        />
      </div>
    </section>
  );
}
