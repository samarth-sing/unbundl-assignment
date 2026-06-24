import { useEffect, useState } from "react";
import { images } from "../assets/images";
import Loader from "./Loader";

const WhyWhistle = () => {
  const [whyWhistle, setWhyWhistle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/public/whyWhistleData.json")
        .then((res) => res.json())
        .then((data) => setWhyWhistle(data))
        .catch((err) => console.error(err));
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="WhyWhistle">
      <h2 className="MainHeading WhyWhistleHeading">Why Whistle?</h2>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default WhyWhistle;
