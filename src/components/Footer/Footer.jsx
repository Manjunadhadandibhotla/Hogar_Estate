import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo1.png" alt="" width={220} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Cherukupalli, Guntur, Andhra Pradesh
          </span>
          <div className="flexCenter f-menu">
            <span className="span1">Property</span>
            <span className="span1">Services</span>
            <span className="span1">Product</span>
            <span className="span1">About Us</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
