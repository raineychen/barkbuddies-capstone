import Header from "../Header/Header";
import Connections from "../Connections/Connections";
// import MessageDisplay from "../MessageDisplay/MessageDisplay";
import './Message.scss';

function Message() {
    return(
        <div className="message__container">
            <Header />
            <div>
                <button className="message__button">Matches</button>
                <button className="message__button">Message</button>
            </div>

            <Connections />
            {/* <MessageDisplay/> */}
        </div>
    )
}

export default Message;