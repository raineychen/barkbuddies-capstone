import "./Footer.scss";
import setting from "../../assets/Images/setting.png";
import messesing from "../../assets/Images/message.png";
import user from "../../assets/Images/user.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <img
          src={messesing}
          alt="message icon"
          className="footer__icons--messaging" 
        />
        <img
          src={setting}
          alt="setting icon"
          className="footer__icons--setting"
        />
        <img src={user} alt="user icon" className="footer__icons--user" />
      </div>
    </footer>
  );
}
