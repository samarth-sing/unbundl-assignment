import { images } from "../assets/images";

const DreamSmiles = () => {
  return (
    <div className="dreamSmiles">
      <div className="dreamSmilesLeft">
        <h2>
          Dream smiles <br />
          achieved secretly
        </h2>
        <p>
          Experience the superior quality of our Whistle Aligners crafted with
          3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
          treatment by expert orthodontists at House of Clove
        </p>
        <p>
          The pricing is different for every case. Cases with higher complexity
          requiring more aligners and additional time and effort from our
          dentists.
        </p>
      </div>
      <div className="dreamSmilesRight">
        <div className="productInfo">
          <h5>Whistle Aligners</h5>
          <p>
            <span>₹84,000</span>
            <br />
            <span>
              <label>starting at</label>
              <label>₹47,999</label>
            </span>
            <br />
            <span>inc. of all taxes</span>
          </p>
          <div>
            <div>
              <img src={images["tickIcon"]} alt="tick icon" />
              <span>Offer valid for a limited time</span>
            </div>
            <div>
              <img src={images["tickIcon"]} alt="tick icon" />
              <span>Easy financing options</span>
            </div>
          </div>
        </div>
        <div className="productImg">
          <img src={images["whistleImg"]} alt="whistle product image" />
          <a>
            Learn more <img src={images["rightArrow"]} alt="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DreamSmiles;
