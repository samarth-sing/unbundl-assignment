import React from "react";
import { whyWhistle1 } from "../assets/images";

const WhyWhistle = () => {
  return (
    <div className="WhyWhistle">
      <h2 className="MainHeading WhyWhistleHeading">Why Whistle?</h2>
      <div className="WhyWhistleCards">
        <div className="WhyWhistleCard">
          <img src={whyWhistle1} alt="services image" />
          <div>
            <h5>Custom-made & invisible</h5>
            <p>
              Tailored for your teeth and smile with a clear, discreet
              appearance.
            </p>
          </div>
        </div>
        <div className="WhyWhistleCard">
          <img src={whyWhistle1} alt="services image" />
          <div>
            <h5>Custom-made & invisible</h5>
            <p>
              Tailored for your teeth and smile with a clear, discreet
              appearance.
            </p>
          </div>
        </div>
        <div className="WhyWhistleCard">
          <img src={whyWhistle1} alt="services image" />
          <div>
            <h5>Custom-made & invisible</h5>
            <p>
              Tailored for your teeth and smile with a clear, discreet
              appearance.
            </p>
          </div>
        </div>
        <div className="WhyWhistleCard">
          <img src={whyWhistle1} alt="services image" />
          <div>
            <h5>Custom-made & invisible</h5>
            <p>
              Tailored for your teeth and smile with a clear, discreet
              appearance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWhistle;
