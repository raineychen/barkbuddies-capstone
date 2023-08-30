import "./LoginPage.scss";
import Hero from "../../assets/Images/login_pups.png";
import backArrow from "../../assets/Images/back_arrow.png";
import Error from  "../../assets/Images/error.png"
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login">
      <div>
        <Link to={"/"}>
          <img alt="back arrow" src={backArrow} className="login__back" />
        </Link>
      </div>
      <div className="login__hero">
        <img alt="dogs in a box" src={Hero} className="login__hero--img" />
      </div>
      <div className="login__container">
        <h1 className="login__container--welcome">Welcome!</h1>
      </div>
      <div className="login__section">
        <div className="login__section--spacer">
          <form>
              <input type="text" name="login_name" placeholder="Email Address" className={`login__input`}></input>
                  {<p className="login__error--message"><img src={Error} alt="Error" className="login__error--icon"/>This field is required</p>}
            
            <div className="login__section--spacer"></div>
            <input type="password" name="login_password" placeholder="Password" className={`login__input`}></input>
                  {<p className="login__error--message"><img src={Error} alt="Error" className="login__error--icon"/>This field is required</p>}
          </form>
        </div>
        <p>
          <Link to="/recover" className="login__text login__text--bold">
            Forgot password?
          </Link>
        </p>
        <button className="login__section--button">
          <Link to="/swipe" className="login__section--button-text">
            Login
          </Link>
        </button>
        <p>
          <Link to="/signup" className="login__text">
            Not a member? Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
