import "./Setting.scss";
import { Link } from "react-router-dom";
// import profile from "../../assets/Images/profile_user.png";
// import edit from "../../assets/Images/edit.png";
// import Footer from "../Footer/Footer";
import backArrow from '../../assets/Images/back_arrow.png'
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link to={"/swipe"}>
          <img alt="back arrow" src={backArrow} className="header__back" />
        </Link>
      </div>
      <div className="header__header">
        <h2 className="header__header--text">Messages</h2>
        <img src={edit} alt="edit icon" className="header__header--icons" />
      </div>
      <div className="header__border">
        <div className="header__image">
          <img className="header__icons" src={profile} alt="user icon" />
        </div>
        <div className="header__box">
          <h2 className="header__user--name">User's Name</h2>
          <p className="header__user--comment">User's Comment</p>
        </div>
      </div>
      <div className="header__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Header;
