import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className = "" }) => {
  return (
    <div className={`page4 ${className}`}>
      <div className="page4-child" />
      <div className="page4-item" />
      <div className="rectangle-parent6">
        <div className="group-child16" />
        <div className="group-child17" />
      </div>
      <img className="arrows-icon1" alt="" src="/arrows.svg" />
      <div className="discover-more-from">Discover More From Our Video</div>
      <img className="small-line-icon7" alt="" src="/small-line.svg" />
      <img className="page4-inner" alt="" src="/rectangle-61@2x.png" />
      <img className="play-button-icon" alt="" src="/play-button.svg" />
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
