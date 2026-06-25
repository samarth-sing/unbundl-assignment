import { useEffect, useState } from "react";
import { images } from "../assets/images";
import Loader from "./Loader";

type ImageKey = keyof typeof images;
interface Result {
  id: number;
  beforeImg: ImageKey;
  afterImg: ImageKey;
  concern: string;
  treatmentDuration: string;
}

const Results = () => {
  const [result, setResult] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("/public/resultData.json")
        .then((res) => {
          if (!res.ok)
            throw new Error(`Failed to load results (${res.status})`);
          return res.json();
        })
        .then((data) => {
          setResult(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Something went wrong. Please try again.");
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="Results">
      <h2 className="MainHeading ResultsHeading">Results You'll Love</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="fetchError">{error}</p>
      ) : (
        <div className="ResultsCards">
          {result.map((data) => (
            <div className="ResultsCard" key={data.id}>
              <div className="ResultCardsImg">
                <div>
                  <img src={images[data.beforeImg]} alt="Gap Before" />
                  <span>Before</span>
                </div>
                <div>
                  <img src={images[data.afterImg]} alt="Gap After" />
                  <span>After</span>
                </div>
              </div>
              <div className="ResultCardsInfo">
                <div>
                  <label>Concern</label>
                  <label>{data.concern}</label>
                </div>
                <div>
                  <label>Treatment Duration</label>
                  <label>{data.treatmentDuration}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
