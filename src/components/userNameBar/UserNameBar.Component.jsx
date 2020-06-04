import React from 'react';
import './userNameBar.scss';

const UserNameBar = (props) => {
    return (
        <div className="user-name-container">
            <p>Welcome, {props.userName}</p>
            <button><span className="ic-edit"></span>Edit Home Feed</button>
        </div>
    );
}

export default UserNameBar;