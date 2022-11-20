import "./footer.style.scss";
import bulb from "../../assests/navbar/bulb.png";
import ig from "../../assests/footer/ig.png";
import linkedin from "../../assests/footer/linkedin.png";
import twitter from "../../assests/footer/twitter.png";
import github from "../../assests/footer/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_holder">
        <div className="flexify">
          <h6>About us</h6>
          <h6>How it Works</h6>
          <h6>Blog</h6>
        </div>
        <div className="flexify">
          <h6>Contact us</h6>
          <h6>FAQs</h6>
          <h6>Help</h6>
        </div>
        <div className="flexify">
          <h6>Terms of use</h6>
          <h6>Privacy Policy</h6>
        </div>
        <div className="flexify">
          <h6>Stay up to daye with our Product</h6>
          <form className="grid_layout">
            <div className="footer_form">
              <input id="subscribe" type="text" placeholder="Your email" />
            </div>
            <button className="footer_btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="last_footer_child">
        <div className="flexMe2">
          <h3>Certawi </h3>
          <img src={bulb} />
        </div>

        <h5 className="padding">info@certawi.com</h5>
        <div className="flexMe3">
          <h5>We are social</h5>
          <img src={ig} />
          <img src={linkedin} />
          <img src={twitter} />
          <img src={github} />
        </div>
      </div>
      <div className="centered padding_bottom">
        &copy; Copyright 2022
        <span className="highlighted"> Team Headlight. </span> All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
