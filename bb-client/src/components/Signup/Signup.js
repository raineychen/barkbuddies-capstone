import "./Signup.scss";
import backArrow from "../../assets/Images/back_arrow.png";
import Error from "../../assets/Images/error.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'
import { response } from "express";


function Signup() {
  const [SignUp, setSignUp] = useState({
    user_id:cookies.UserId,
    name:"",
    age:"",
    pet_name:"",
    pet_gender:"",
    url:"",
    email:"",
    vaccination:"",
    matches:[]
})

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['users'])
  const [pupVaccinated, setPupVaccinated] = useState(false);
  let navigate = useNavigate()
  const signUp = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (signUp && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setCookie('Email', response.data.email)
    setCookie('UserId', response.data.userId)
    setCookie('AuthToken', response.data.token)

  
    axios
      .post('http://localhost:8080/register', { email, password })
      .then((response) => {
        const success = response.status === 201;
  
        if (success) {
          navigate('/account');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleChange = (e) => {
    console.log('e', e)
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name

    setSignUp((prevState) => ({
        ...prevState,
        [name]: value
    }))
}

  return (
    <div className="signup">
      <div>
        <Link to="/login">
          <img alt="back arrow" src={backArrow} className="signup__back" />
        </Link>
      </div>
      <div className="signup__header">
        <h1>Sign Up</h1>
        <p>Create an account to get started</p>
      </div>
      <div className="signup__section">
        <div className="signup__section--spacer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="signup_name"
              placeholder="Name"
              className="signup__input"
              required={true}
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field is required
            </p> */}

            <div className="signup__section--spacer"></div>
            <input
              type="text"
              name="signup_petname"
              placeholder="Pet Name"
              className="signup__input"
              required
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field is required
            </p> */}
            <div className="signup__section--spacer"></div>

            <div className="signup__section--spacer"></div>
            <input
              type="text"
              name="signup_age"
              placeholder="Pet age"
              className="signup__input"
              required
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field is required
            </p> */}
            <div className="signup__section--spacer"></div>

            <div className="signup__vaccinated-options">
              <label>
                Is your dog vaccinated?
                <input
                  type="radio"
                  name="vaccinated"
                  value="yes"
                  checked={pupVaccinated === true}
                  onChange={() => setPupVaccinated(true)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="vaccinated"
                  value="no"
                  checked={pupVaccinated === false}
                  onChange={() => setPupVaccinated(false)}
                />
                No
              </label>
            </div>
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field is required
            </p> */}
            <section>
              <div className="signup__section--spacer"></div>

              <label htmlFor="url"></label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="Profile Photo"
                className="signup__input"
                onChange={handleChange}
                required={true}
              />
              <div className="photo-container">
                {SignUp.url && (
                  <img src={SignUp.url} alt="profile pic preview" />
                )}
              </div>
            </section>

            <div className="signup__section--spacer"></div>

            <div className="signup__section--spacer"></div>
            <input
              type="text"
              name="signup_email"
              placeholder="Email Address"
              className="signup__input"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field is required
            </p> */}

            <div className="signup__section--spacer"></div>

            <input
              type="password"
              name="signup_password"
              placeholder="Create a password"
              className="signup__input"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              This field requires vaild password
            </p> */}
            <div className="signup__section--spacer"></div>

            <input
              type="password"
              name="signup_confirm_password"
              placeholder="Confirm password"
              className="signup__input"
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <p className="signup__error--message">
              <img src={Error} alt="Error" className="signup__error--icon" />
              Password not matched
            </p> */}

            <div className="signup__section--spacer"></div>

            <div className="signup__terms">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                className="signup__checkbox"
                required
              />
              <label htmlFor="termsCheckbox" className="signup__terms--label">
                I have read and agree to the Terms and Conditions and the
                Privacy Policy
              </label>
              {/* <p className="signup__error--message">
                <img src={Error} alt="Error" className="signup__error--icon" />
                This field is required
              </p> */}
            </div>
            <input className="submit__button" type="submit" />
            <p>{error}</p>
          </form>
        </div>

        {/* <button className="signup__section--button">
          <Link to="/" className="signup__section--button-text">
            Sign Up
          </Link>
        </button> */}
      </div>
    </div>
  );
}

export default Signup;
