import React from "react";
import { GapsAfter, GapsBefore } from "../assets/images";

const Results = () => {
  return (
    <div className="Results">
      <h2 className="MainHeading ResultsHeading">Results You'll Love</h2>
      <div className="ResultsCards">
        <div className="ResultsCard">
          <div className="ResultCardsImg">
            <div>
              <img src={GapsBefore} alt="Gap Before" />
              <span>Before</span>
            </div>
            <div>
              <img src={GapsAfter} alt="Gap After" />
              <span>After</span>
            </div>
          </div>
          <div className="ResultCardsInfo">
            <div>
              <label>Concern</label>
              <label>Gaps</label>
            </div>
            <div>
              <label>Treatment Duration</label>
              <label>8 months</label>
            </div>
          </div>
        </div>
        <div className="ResultsCard">
          <div className="ResultCardsImg">
            <div>
              <img src={GapsBefore} alt="Gap Before" />
              <span>Before</span>
            </div>
            <div>
              <img src={GapsAfter} alt="Gap After" />
              <span>After</span>
            </div>
          </div>
          <div className="ResultCardsInfo">
            <div>
              <label>Concern</label>
              <label>Gaps</label>
            </div>
            <div>
              <label>Treatment Duration</label>
              <label>8 months</label>
            </div>
          </div>
        </div>
        <div className="ResultsCard">
          <div className="ResultCardsImg">
            <div>
              <img src={GapsBefore} alt="Gap Before" />
              <span>Before</span>
            </div>
            <div>
              <img src={GapsAfter} alt="Gap After" />
              <span>After</span>
            </div>
          </div>
          <div className="ResultCardsInfo">
            <div>
              <label>Concern</label>
              <label>Gaps</label>
            </div>
            <div>
              <label>Treatment Duration</label>
              <label>8 months</label>
            </div>
          </div>
        </div>
        <div className="ResultsCard">
          <div className="ResultCardsImg">
            <div>
              <img src={GapsBefore} alt="Gap Before" />
              <span>Before</span>
            </div>
            <div>
              <img src={GapsAfter} alt="Gap After" />
              <span>After</span>
            </div>
          </div>
          <div className="ResultCardsInfo">
            <div>
              <label>Concern</label>
              <label>Gaps</label>
            </div>
            <div>
              <label>Treatment Duration</label>
              <label>8 months</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
