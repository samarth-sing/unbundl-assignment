import { useEffect, useState } from "react";
import { images } from "../assets/images";
import Loader from "./Loader";

type ImageKey = keyof typeof images;
interface whyWhistle {
  id: number;
  serviceImg: ImageKey;
  serviceName: string;
  serviceDetail: string;
}

const WhyWhistle = () => {
  const [whyWhistle, setWhyWhistle] = useState<whyWhistle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("/whyWhistleData.json")
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load data (${res.status})`);
          return res.json();
        })
        .then((data) => {
          setWhyWhistle(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Something went wrong. Please try again.");
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="WhyWhistle">
      <h2 className="MainHeading WhyWhistleHeading">Why Whistle?</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="fetchError">{error}</p>
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
