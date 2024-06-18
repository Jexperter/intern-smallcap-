import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer1 ${className}`}>
      <img className="footer-child1" alt="" src="/rectangle-221.svg" />
      <div className="footer-child2" />
      <div className="top-line7">
        <div className="top-line-child10" />
        <div className="top-line-child11" />
      </div>
      <div className="info1">
        <div className="company1">Company</div>
        <div className="part11">
          <div className="home20">Home</div>
          <div className="home20">About</div>
          <div className="home20">Road Map</div>
        </div>
        <div className="product1">Product</div>
        <div className="part21">
          <div className="home20">Form</div>
          <div className="home20">Token</div>
          <div className="home20">FAQ</div>
        </div>
      </div>
      <div className="infosmallcapcom1">info@smallcap.com</div>
      <div className="subscribe2">Subscribe</div>
      <div className="contact-us2">Contact Us</div>
      <div className="nsai1">©2024. 3ns.ai</div>
      <img className="ns-2-icon4" alt="" src="/3ns-21@2x.png" />
      <div className="logo1">
        <div className="twitter1">
          <div className="twitter-item" />
          <img className="twitter-1-icon1" alt="" src="/twitter-1@2x.png" />
        </div>
        <div className="twitter1">
          <div className="twitter-item" />
          <img className="facebook-1-icon1" alt="" src="/facebook-1@2x.png" />
        </div>
        <div className="twitter1">
          <div className="twitter-item" />
          <img className="instagram-1-icon1" alt="" src="/instagram-1@2x.png" />
        </div>
        <div className="twitter1">
          <div className="twitter-item" />
          <img className="linkedin-1-icon1" alt="" src="/linkedin-1@2x.png" />
        </div>
      </div>
      <div className="footer-child3" />
      <div className="primary-button2">
        <div className="rectangle2" />
        <div className="submit2">Submit</div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
