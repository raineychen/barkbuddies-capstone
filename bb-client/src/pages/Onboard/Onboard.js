import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Images/back_arrow.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Onboard.scss";

function Onboard() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [signUp, setSignUp] = useState({
    user_id: cookies.UserId,
    name: "",
    age: "",
    pet_name: "",
    pet_gender: "",
    pet_age: "",
    url: "",
    email: "",
    vaccination: "",
    matches: [],
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();

    axios
      .put("http://localhost:8080/user", {
        signUp,
      })
      .then((response) => {
        console.log(response);
        const success = response.status === 200;
        if (success) navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="register">
        <div>
          <Link to="/login">
            <img alt="back arrow" src={backArrow} className="signup__back" />
          </Link>
        </div>
        <div className="register__header">
          <h2>CREATE ACCOUNT</h2>
        </div>
        <div className="signup__section">
          <div className="signup__section--spacer">
            <form onSubmit={handleSubmit}>
              <section>
                <label htmlFor="name">Name</label>
                <input
                  className="register__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required={true}
                  value={signUp.name}
                  onChange={handleChange}
                />
                <div className="register__section--spacer"></div>
                <label htmlFor="pet_name">Pet Name</label>
                <input
                  className="register__input"
                  type="text"
                  name="pet_name"
                  placeholder="Pet Name"
                  required={true}
                  value={signUp.pet_name}
                  onChange={handleChange}
                />
                <div className="signup__section--spacer"></div>

                <label htmlFor="pet_gender">Pet Gender</label>
                <input
                  className="register__input"
                  type="text"
                  name="pet_gender"
                  placeholder="Pet Gender"
                  required={true}
                  value={signUp.pet_gender}
                  onChange={handleChange}
                />
                <div className="signup__section--spacer"></div>
                <label htmlFor="pet-age">Pet Age:</label>
                <input
                  className="register__input"
                  type="text"
                  name="pet_age"
                  placeholder="Pet Age"
                  value={signUp.pet_age}
                  onChange={handleChange}
                />
                <div className="signup__section--spacer"></div>

                <label htmlFor="email">Email</label>
                <input
                  className="register__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  value={signUp.email}
                  onChange={handleChange}
                />
                <div className="signup__section--spacer"></div>

                <div className="vaccination-input-container">
                  <label>Is the dog vaccinated?</label>

                  <input
                    id="yes-vaccination"
                    type="radio"
                    name="vaccination"
                    value="yes"
                    onChange={handleChange}
                    checked={signUp.vaccination === "yes"}
                  />
                  <label htmlFor="yes-vaccination">Yes</label>

                  <input
                    id="no-vaccination"
                    type="radio"
                    name="vaccination"
                    value="no"
                    onChange={handleChange}
                    checked={signUp.vaccination === "no"}
                  />
                  <label htmlFor="no-vaccination">No</label>
                </div>

                <input className="submit__button" type="submit" />
              </section>
              <div className="signup__section--spacer"></div>
              <section>
                <label htmlFor="url">Profile Photo</label>
                <input
                  className="register__input"
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  required={true}
                />
                <div className="photo-container">
                  {signUp.url && (
                    <img src={signUp.url} alt="profile pic preview" />
                  )}
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboard;
