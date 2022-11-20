import "./navbar.style.scss";
import logo from "../../assests/navbar/Certawi.png";
import bulb from "../../assests/navbar/bulb.png";
import menu from "../../assests/navbar/menu.png";
import image from "../../assests/navbar/image.png";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const setShowHandler = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <React.Fragment>
      <div className="nav">
        <div className="holding_div">
          <div className="logos">
            <img src={logo} />
            <img src={bulb} />
          </div>
          <div className="list_menu_items_holder">
            <a className="list_menu_item">Home</a>
            <a className="list_menu_item">Browse Templates</a>
            <a className="list_menu_item">Pricing</a>
            <a className="list_menu_item">Blog</a>
            <a className="list_menu_item">FAQs</a>
            <a className="list_menu_item flex">
              <span>My Account</span> <img src={image} />
            </a>
          </div>
          <button type="button" onClick={setShowHandler} id="hamburger">
            <img src={menu} />
          </button>
        </div>
        {!show && (
          <div className="menu_holder">
            <div className="menu_items">
              <span>Home</span>
              <span>Browse Templates</span>
              <span>Pricing</span>
              <span>Blog</span>
              <span>FAQs</span>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
