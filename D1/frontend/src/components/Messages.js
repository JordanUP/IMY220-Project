import React from 'react';

const dummyMessages = ['Checked in by User1: Updated File', 'Checked out by User2: Folder'];

const Messages = () => {
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {dummyMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
