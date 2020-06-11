import React from 'react';
import './userNameBar.scss';
import ClientViewControl from '../ClientViewControl/ClientViewControl.Component';

const UserNameBar = (props) => {
    return (
        <div className="user-name-container">
            <div className="user-name">
                <p>Welcome, {props.userName}</p>
                <button className="edit-home-feed"><span className="ic-edit"></span>Edit Home Feed</button>
            </div>
            <div className="user-actions">
                <ClientViewControl 
                clientViewOn={true}
                />
            </div>
        </div>
    );
}

export default UserNameBar;