import React, { useState, useEffect } from 'react';
import './ClientViewControl.scss';

const ClientViewControl = (props) => {
    const [status, setStaus] = useState(props.clientViewOn);

    const toggleStatus = () => {
        setStaus(!status);
    }

    useEffect(() => {
        props.onStatusChange(status);
    }, [status]);

    return (
        <div className={`clientview-container ${status ? "clientview-on" : "clientview-off"}`} onClick={toggleStatus}>
            <span className={status ? "ic-eye-open": "ic-eye-close"}></span>Client view: {status ? 'ON' : 'OFF'}
        </div>
    );
}

export default ClientViewControl;