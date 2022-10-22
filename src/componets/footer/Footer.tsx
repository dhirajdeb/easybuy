import fbIcon from "../../assets/icons/fb.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import twitterIcon from "../../assets/icons/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h5 className="footer--title">
        Buy Me Corp.
        <br />
        www.easybuy.com
        <br />
        +91 1234567890
      </h5>
      <ul className="footer--items">
        <li>
          <img src={fbIcon} alt="fb icon" />
        </li>
        <li>
          <img src={linkedinIcon} alt="linkedin icon" />
        </li>
        <li>
          <img src={twitterIcon} alt="tweeter icon" />
        </li>
      </ul>
    </footer>
  );
}
