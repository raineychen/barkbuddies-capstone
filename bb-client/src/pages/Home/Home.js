import Welcome from "../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
    const authToken = false

    const handleClick = () => {
        console.log('clicked')
    }
    return(
        <>
        <Welcome />
        <div className="home__section">
        <button className="home__section--button"><Link to={'/login'} className="home__section--text">Login</Link></button>
        <div className="home__section--spacer">
        <button className="home__section--button"><Link to={'/signup'} className="home__section--text">Signup</Link></button>
        </div> 
     </div>
        </>
    )
}

export default Home;