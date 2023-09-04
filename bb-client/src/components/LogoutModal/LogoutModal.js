import './LogoutModal.scss';

function LogoutModal({setShowModal}) {
    const handleClick =()=>{
        setShowModal(false)
    }

    return(
        <div className='logout-overlay'>
        <div className="logout">
        <button className="close-button" onClick={handleClick}>Cancel</button>
        <h2>LOG OUT</h2>
        </div>
        </div>
    )
}

export default LogoutModal;