import './ChatInput.scss';
import { useState } from 'react';

function ChatInput() {
    const [textArea, setTextArea] = useState(null)
    return(
       <div className='input'>
        <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
        <button className='input__button'>Send</button>

       </div>
    )
}

export default ChatInput;