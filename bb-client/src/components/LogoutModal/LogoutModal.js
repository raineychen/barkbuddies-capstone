import { Link } from "react-router-dom";
import './LogoutModal.scss';

function LogoutModal({setShowModal}) {
    const handleClick =()=>{
        setShowModal(false)
    }

    return(
        <>
        <div className='logout-overlay'>
        <div className="logout">
        <div className="logout__message">
        <h2 className="logout__message--header">Log out</h2>
        <p className="logout__message logout__message--alert">Are you sure you want to log out? You'll need to login again to use the app.</p>
        </div>
        <div className="logout__button">
        <div className="logout__button--cancel">
        <button className="logout__text" onClick={handleClick}>Cancel</button>
        </div>
        <div className="logout__button--logout">
        <Link to={'/'}>
        <button className="logout__text">Log out</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default LogoutModal;