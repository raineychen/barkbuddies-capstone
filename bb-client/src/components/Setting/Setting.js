import LogoutModal from "../../components/LogoutModal/LogoutModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import profile from "../../assets/Images/profile_user.png";
import edit from "../../assets/Images/edit.png";
import Footer from "../../components/Footer/Footer";
import backArrow from "../../assets/Images/back_arrow.png";
import forward from "../../assets/Images/forward_arrow.png";
import "./Setting.scss";

function Setting() {
  const authToken = true;
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
  };

  return (
    <>
      <div className="settings"> 
      <div className="settings__header">
        <div>
          <Link to={"/swipe"}>
            <img alt="back arrow" src={backArrow} className="settings__back" />
          </Link>
        </div>
       
          <h2 className="settings__header--text">Settings</h2>
          {/* <img src={edit} alt="edit icon" className="settings__header--icons" /> */}
        </div>
        <div className="settings__border">
          <div className="settings__image">
            <img className="settings__icons" src={profile} alt="user icon" />
            <img src={edit} alt="edit icon" className="settings__image--icons" />
            <div className="settings__user">
                <h2 className="settings__user--name">Pet's Name</h2>
                <p className="settings__user--name">User's Name</p>
            </div>
          </div>
          <div className="settings__box">
          
            <Link className="settings__box--text">Account<img src={forward} alt="forward icon" className="settings__box--icons" /></Link>
            <Link className="settings__box--text">Contact Us<img src={forward} alt="forward icon" className="settings__box--icons" /></Link>
            <Link className="settings__box--text">Privacy & Security<img src={forward} alt="forward icon" className="settings__box--icons" /></Link>
           
          </div>
        </div>

        <div>
          <button className="settings__logout" onClick={handleClick}>
            {authToken ? "Signout" : "Delete Account"}
            {/* {authToken ? "Signout" : "Delete Account"} */}
          </button>
          {showModal && <LogoutModal setShowModal={setShowModal} />}
        </div>
        <div className="settings__footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Setting;
