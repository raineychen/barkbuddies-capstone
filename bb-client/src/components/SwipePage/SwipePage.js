import "./SwipePage.scss";
import Footer from "../Footer/Footer";
import userProfile from '../../assets/Images/profile_user.png'
import heart from '../../assets/Images/heart.png'
import info from '../../assets/Images/info.png'
import xMark from '../../assets/Images/x_mark.png'



function SwipePage() {
  return (
   <div className="swipe">
    <div className="swipe__hero">
        <div className="swipe__info">
        <h3 className="swipe__info--name">Atticus</h3> <p className="swipe__info--age">1 year</p>
        </div>
        <div className="swipe__detail">
        <p className="swipe__info--gender">Male</p> <p className="swipe__info--breed">Pomerian</p> <p className="swipe__info--distance">0.5km away</p> 
        </div>
    </div>
    <div className="swipe__buttons">
        <div className="swipe__buttons--user"><img src={userProfile} alt="user profile" className="swipe__icon"/><p className="swipe__owner"> Tina</p></div>
        <div className="swipe__buttons--interation"><img className="swipe__icons" src={xMark} alt="x-mark"/><img className="swipe__icon" src={info} alt="info"/> <img className="swipe__icons" src={heart} alt="heart icon"/></div>
    </div>
    <Footer />
   </div>
  );
}

export default SwipePage;