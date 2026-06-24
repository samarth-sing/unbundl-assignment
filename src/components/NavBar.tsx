import { useEffect, useState } from "react";
import { images } from "../assets/images";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const numberShownInterval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 2000);

    return () => clearInterval(numberShownInterval);
  }, []);

  return (
    <nav className="navBar">
      <div className="navBarMain">
        <div className="navLogo">
          <img src={images["whistleIcon"]} alt="Whistle Logo" />
        </div>
        <div className={`navPhoneBtn ${expanded ? "navPhoneExpanded" : ""}`}>
          <img src={images["phoneIcon"]} alt="phone" className="navPhoneIcon" />
          <span className="navPhoneNumber">01169328350</span>
        </div>
      </div>
      <div className="navAnnouncement">
        Starting at <span className="navStrike">Rs 69,999</span>{" "}
        Rs 47,999. Hurry! Offer ends soon.
      </div>
    </nav>
  );
};

export default NavBar;
