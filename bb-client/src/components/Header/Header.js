import "./Header.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/Images/edit.png";
import Footer from "../Footer/Footer";
import backArrow from '../../assets/Images/back_arrow.png'


function Header({user}) {
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
      <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.name}/>
                </div>
                <h3>{user.name}</h3>
            </div>
        </div>
      <div className="header__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Header;
