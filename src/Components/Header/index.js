import "./header.style.scss";
import frame from "../../assests/header/frame.png";
import image from "../../assests/navbar/image.png";
import map from "../../assests/header/map.png";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="frame">
        <img src={frame} />
        <div className="header_profile_icon">
          <img src={image} />
        </div>
      </div>
      <div className="profile_details">
        <div>
          <h2>Olamposi Benjamin</h2>
        </div>
        <div>Advisor and Consultant at Stripe Inc</div>
        <div className="location">
          <img src={map} /> <span>Lagos, Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
