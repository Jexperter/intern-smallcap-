import Page1 from "./Page1";
import Page from "./Page";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "./AboutPage.css";

const AboutPage = ({ className = "" }) => {
  return (
    <div className={`about-page ${className}`}>
      <div className="page1">
        <div className="page1-child" />
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="group-item" />
          <div className="group-inner" />
        </div>
        <div className="introduction-to-smallcapai">
          Introduction to Smallcap.ai
        </div>
        <div className="smallcapai-aims-to-container">
          <p className="smallcapai-aims-to">{`Smallcap.ai aims to empower investors with unparalleled, data-driven insights into small-cap crypto `}</p>
          <p className="smallcapai-aims-to">{`tokens through advanced AI technologies and human expertise. The platform will provide detailed token `}</p>
          <p className="smallcapai-aims-to">{`profiles, AI-driven risk assessments, market sentiment analysis, price predictions, and automated email `}</p>
          <p className="reports-all-presented">
            reports, all presented via an intuitive web interface.
          </p>
        </div>
        <img className="doc-icon" alt="" src="/doc.svg" />
        <div className="picture">
          <img className="picture-child" alt="" src="/rectangle-63@2x.png" />
          <img className="picture-child" alt="" src="/rectangle-64@2x.png" />
          <img className="picture-child" alt="" src="/rectangle-65@2x.png" />
          <img className="picture-child" alt="" src="/rectangle-66@2x.png" />
        </div>
        <div className="names">
          <div className="name">
            <div className="robert-a">Robert A</div>
            <div className="lead-of-project">Lead of Project</div>
          </div>
          <div className="name">
            <div className="james-b">James B</div>
            <div className="lead-of-project">Lead of Project</div>
          </div>
          <div className="name">
            <div className="amy-c">Amy C</div>
            <div className="lead-of-project">Lead of Project</div>
          </div>
          <div className="name">
            <div className="tony-d">Tony D</div>
            <div className="lead-of-project">Lead of Project</div>
          </div>
        </div>
        <div className="title">
          <div className="welcome-to-small-cap">Main Members</div>
        </div>
        <img className="small-line-icon" alt="" src="/small-line.svg" />
        <div className="learn-more">
          <div className="learn-more-about">Learn More About Us</div>
          <img className="ns-2-icon" alt="" src="/3ns-2@2x.png" />
          <img className="small-line-icon1" alt="" src="/small-line.svg" />
        </div>
        <img className="icon" alt="" src="/icon@2x.png" />
        <div className="top-line">
          <div className="top-line-child" />
          <div className="top-line-item" />
        </div>
      </div>
      <Page1 />
      <div className="page22">
        <div className="page22-child" />
        <img className="page22-item" alt="" src="/rectangle-22.svg" />
        <div className="top-line1">
          <div className="top-line-inner" />
          <div className="line-div" />
        </div>
        <div className="top-line2">
          <div className="top-line-child" />
          <div className="top-line-child1" />
        </div>
        <div className="title1">
          <div className="welcome-to-small-cap">Our Story</div>
        </div>
        <img className="small-line-icon2" alt="" src="/small-line.svg" />
        <div className="arrow">
          <div className="arrow-left">
            <div className="top-line-child" />
            <img className="arrow-left-item" alt="" src="/rectangle-4.svg" />
          </div>
          <img className="arrow-right-icon" alt="" src="/arrow-right@2x.png" />
        </div>
        <div className="smallcapai-stories">Smallcap.ai Stories</div>
        <div className="banner">
          <img className="banner-child" alt="" src="/rectangle-67@2x.png" />
          <div className="over-the-years">
            Over the years, we expanded our horizons, exploring new technologies
            and market opportunities. In the early days, we started with a small
            team of dedicated professionals.
          </div>
          <div className="arrow-left-parent">
            <div className="arrow-left1">
              <div className="top-line-child" />
              <img className="arrow-left-item" alt="" src="/rectangle-41.svg" />
            </div>
            <img
              className="arrow-right-icon1"
              alt=""
              src="/arrow-right1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="page3">
        <img
          className="background2-1-icon"
          alt=""
          src="/background2-11@2x.png"
        />
        <img
          className="background5-1-icon"
          alt=""
          src="/background5-1@2x.png"
        />
        <div className="title2">
          <div className="welcome-to-small-cap">
            About Small-Cap Token Analysis
          </div>
        </div>
        <div className="top-line3">
          <div className="top-line-child" />
          <div className="top-line-child1" />
        </div>
        <div className="number1">
          <div className="rectangle-group">
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="div">01</div>
          </div>
          <div className="token-profiles">Token Profiles</div>
          <div className="click-on-the-container">
            <p className="click-on-the">
              Click on the "Token Profiles" section to access
            </p>
            <p className="reports-all-presented">
              detailed profiles for small-cap tokens.
            </p>
          </div>
          <div className="number1-child" />
        </div>
        <div className="number2">
          <div className="rectangle-group">
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="div">02</div>
          </div>
          <div className="token-profiles1">
            <p className="reports-all-presented">AI-Driven Risk</p>
            <p className="reports-all-presented">Assessment</p>
          </div>
          <div className="click-on-the-container">
            <p className="click-on-the">{`Navigate to the "Risk Assessment" section to `}</p>
            <p className="reports-all-presented">
              view AI-driven risk scores for selected tokens.
            </p>
          </div>
          <div className="number1-child" />
        </div>
        <div className="number3">
          <div className="rectangle-group">
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="div">03</div>
          </div>
          <div className="token-profiles2">Market Sentiment</div>
          <div className="click-on-the-container">
            <p className="click-on-the">
              Explore the "Market Sentiment Analysis" section to
            </p>
            <p className="reports-all-presented">
              monitor real-time sentiment around each token.
            </p>
          </div>
          <div className="number1-child" />
        </div>
        <div className="number4">
          <div className="rectangle-group">
            <div className="group-child1" />
            <div className="group-child2" />
            <div className="div">04</div>
          </div>
          <div className="token-profiles3">Price Prediction Engine</div>
          <div className="click-on-the-container">
            <p className="click-on-the">{`Visit the "Price Prediction" section to access `}</p>
            <p className="click-on-the">{`short-term and long-term price predictions for `}</p>
            <p className="reports-all-presented">selected tokens.</p>
          </div>
          <div className="number1-child" />
        </div>
        <img className="small-line-icon3" alt="" src="/small-line1.svg" />
      </div>
      <Page />
      <Footer />
      <div className="menu-about">
        <div className="top-rectangle" />
        <img className="ns-2-icon1" alt="" src="/3ns-1@2x.png" />
        <div className="button-about">
          <div className="top-button-contact">
            <img className="top-button-contact-child" alt="" />
            <div className="home">Home</div>
          </div>
          <div className="top-button-contact1">
            <img className="top-button-contact-child" alt="" />
            <div className="home1">About Company</div>
          </div>
          <div className="top-button-contact">
            <img className="top-button-contact-child" alt="" />
            <div className="home2">Project</div>
          </div>
          <div className="top-button-contact">
            <img className="top-button-contact-child" alt="" />
            <div className="home3">Video</div>
          </div>
          <div className="rectangle-parent2">
            <div className="group-child9" />
            <div className="top-button-contact4">
              <img className="top-button-contact-child" alt="" />
              <div className="home4">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPage.propTypes = {
  className: PropTypes.string,
};

export default AboutPage;
