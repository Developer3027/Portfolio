import React, { useState } from 'react';
import './styles.css'

const AddDivConcept = () => {
    const [botMsg, setBotMsg] = useState('');
    const [bot, setBot] = useState(false);

    const botReply = (e) => {
        e.preventDefault();
        setBot(true);
    }

    return (
        <div className='main'>
            <span className='default'><div className={bot ? "bot" : "hide"}>@sys-bot: {botMsg}</div></span>

            <form onSubmit={botReply}>
                <input type='text' placeholder='bot' value={botMsg} onChange={((e) => setBotMsg(e.target.value))} />
                <button type='submit'>bot</button>
            </form>
        </div>
    )
}

export default AddDivConcept;