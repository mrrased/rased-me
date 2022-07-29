import React from 'react';
import './message.css';

const messageForm = () => {
    return (
        <div>
            <form>
                <input className='input-style' type="text" placeholder='name'/>
            </form>
        </div>
    );
};

export default messageForm;