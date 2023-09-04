import "./Footer.scss";
import setting from "../../assets/Images/setting.png";
import messesing from "../../assets/Images/message.png";
import user from "../../assets/Images/user.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer__icons">
        <Link to={'/swipe/message'}>
        <img
          src={messesing}
          alt="message icon"
          className="footer__icons--messaging" 
        />
        </Link>
        <Link to={'/settings'}>
        <img
          src={setting}
          alt="setting icon"
          className="footer__icons--setting"
        />
        </Link>
        <Link to={'/profile'}>
        <img src={user} alt="user icon" className="footer__icons--user" />
        </Link>
      </div>
    </footer>
  );
}
