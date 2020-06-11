import React from 'react';
import './ClientViewControl.scss';

const ClientViewControl = (props) => {
    return (
        <div className={`clientview-container ${props.clientViewOn ? "clientview-on" : "clientview-off"}`}>
            <span className={props.clientViewOn ? "ic-eye-open": "ic-eye-close"}></span>Client view: {props.clientViewOn ? 'ON' : 'OFF'}
        </div>
    );
}

export default ClientViewControl;