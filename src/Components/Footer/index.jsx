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
          <form>
            <div className="form_item">
              <input id="subscribe" type="text" />
              <label htmlFor="subscribe">Subsribe</label>
            </div>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="last_footer_child">
        <h3 className="flexMe">
          Certawi <img src={bulb} />
        </h3>
        <h5 className="flexMe2">
          We are social <img src={ig} />
          <img src={linkedin} />
          <img src={twitter} />
          <img src={github} />
        </h5>
      </div>
    </div>
  );
};

export default Footer;
