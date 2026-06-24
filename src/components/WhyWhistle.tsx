import { useEffect, useState } from "react";
import { images } from "../assets/images";

const WhyWhistle = () => {
  const [whyWhistle, setWhyWhistle] = useState([]);

  useEffect(() => {
    fetch("/public/whyWhistleData.json")
      .then((res) => res.json())
      .then((data) => setWhyWhistle(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="WhyWhistle">
      <h2 className="MainHeading WhyWhistleHeading">Why Whistle?</h2>
      <div className="WhyWhistleCards">
        {whyWhistle.map((data) => (
          <div key={data.id} className="WhyWhistleCard">
            <img src={images[data.serviceImg]} alt="services image" />
            <div>
              <h5>{data.serviceName}</h5>
              <p>{data.serviceDetail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWhistle;
