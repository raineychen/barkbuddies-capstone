import Logo from "../../assets/Logo/logo.png";
import Hero from "../../assets/Logo/logo_catchphrase.png";
// import { Link } from "react-router-dom";
import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__logo">
        <img alt="outline of dog" src={Logo} className="welcome__logo--img" />
      </div>
      <div className="welcome__hero">
        <img alt="Bark Buddies catchphrase" src={Hero} className="welcome__hero--img" />
      </div>
      <div className="welcome__container">
        <h1 className="welcome__container--description">Connect your fury friend with compatible playmates!</h1>
        <p className="welcome__container--description-color">Swipe through dog profiles, match with fellow dog owners and set up safe playdates near you.</p>
      </div>
    </div>
  );
}

export default Welcome;
