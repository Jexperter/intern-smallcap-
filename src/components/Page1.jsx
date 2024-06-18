import PropTypes from "prop-types";
import "./Page1.css";

const Page1 = ({ className = "" }) => {
  return (
    <div className={`page21 ${className}`}>
      <div className="page21-child" />
      <img className="background2-1-icon1" alt="" src="/background2-1@2x.png" />
      <img className="small-line-icon6" alt="" src="/small-line1.svg" />
      <div className="rectangle-parent5">
        <div className="group-child14" />
        <div className="group-child15" />
      </div>
      <img className="arrows-icon" alt="" src="/arrows.svg" />
      <div className="about-our-company">About Our Company</div>
      <div className="our-company-was-container">
        <p className="our-company-was">{`Our company was established on..........................At Smallcap.ai, we envision a future where digital `}</p>
        <p className="our-company-was">{`currencies and blockchain technology are seamlessly integrated into everyday life, making financial `}</p>
        <p className="our-company-was">{`transactions faster, safer, and more accessible. We strive to be a global leader in tokenomics, fostering `}</p>
        <p className="a-decentralized-economy">
          a decentralized economy that benefits all participants.
        </p>
      </div>
    </div>
  );
};

Page1.propTypes = {
  className: PropTypes.string,
};

export default Page1;
