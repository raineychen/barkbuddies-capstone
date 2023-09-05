import "./Login.scss";
import Hero from "../../assets/Images/login_pups.png";
import backArrow from "../../assets/Images/back_arrow.png";
import Error from "../../assets/Images/error.png";
import { Link } from "react-router-dom";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const signUp = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUp && password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      console.log("Make a POST request to our database");
    }
  };
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
          <form onSubmit={handleSubmit}>
            <div className="login__email">
              <input
                type="text"
                name="login_name"
                placeholder="Email Address"
                className={`login__input`}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {/* {<p className="login__error--message"><img src={Error} alt="Error" className="login__error--icon"/>This field is required</p>} */}
            </div>
            <div className="login__section--spacer"></div>
            <input
              type="password"
              name="login_password"
              placeholder="Password"
              className={`login__input`}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {/* {<p className="login__error--message"><img src={Error} alt="Error" className="login__error--icon"/>This field is required</p>} */}
          </form>
        </div>
        <p>
          <Link to="/recover" className="login__text login__text--bold">
            Forgot password?
          </Link>
        </p>
        <button className="login__section--button">
          <Link to="/dashboard" className="login__section--button-text">
            Login
          </Link>
        </button>
        <p>
          <Link to="/signup" className="login__text">
            <p>Not a member? Register Now</p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
