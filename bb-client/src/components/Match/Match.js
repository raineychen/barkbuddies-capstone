import "./Match.scss";
import { Link } from "react-router-dom";
import profile from "../../assets/Images/profile_user.png";
import edit from "../../assets/Images/edit.png";
import Footer from "../Footer/Footer";


function Match() {
  return (
    <div className="comments">
      <div className="comments__header">
        <h2>Messages</h2>
        <img src={edit} alt='edit icon' className="comments__header--icons"/>
      </div>
      <div className="comments__border">
        <div className="comments__image">
          <img className="comments__icons" src={profile} alt="user icon" />
        </div>
        <div className="comments__box">
          <h2 className="comments__user--name">User's Name</h2>
          <p className="comments__user--comment">User's Comment</p>
        </div>
      </div>  
      <div className="comments__footer">
      <Footer />
      </div>
    </div>
  
   
  );
}

export default Match;
