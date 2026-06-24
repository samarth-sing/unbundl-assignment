import { useEffect, useState } from "react";
import { images } from "../assets/images";

const Results = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("/public/resultData.json")
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Results">
      <h2 className="MainHeading ResultsHeading">Results You'll Love</h2>
      <div className="ResultsCards">
        {result.map((data) => (
          <div className="ResultsCard">
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
    </div>
  );
};

export default Results;
