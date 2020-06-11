import React from 'react';
import './userNameBar.scss';
import ClientViewControl from '../ClientViewControl/ClientViewControl.Component';
import CustomDropDown from '../../common/customDropDown/dropdown.Component';

const UserNameBar = (props) => {
    let items = [{
        id: 1,
        text: 'All Agencies'
    }, {
        id: 2,
        text: 'Other'
    }]

    const onItemChange = (item) => {
        console.log(item);
    }

    const getToggledValue = (value) => {
        console.log(value);
    }

    const selectClass = {
        'border-top': 'none',
        'border-left': 'none',
        'border-right': 'none',
        'border-bottom': '2px solid #0D3F5E',
        'border-radius': '0px'
    }

    return (
        <div className="user-name-container">
            <div className="user-name">
                <p>Welcome, {props.userName}</p>
                <button className="edit-home-feed"><span className="ic-edit"></span>Edit Home Feed</button>
            </div>
            <div className="user-actions">
                <ClientViewControl
                    clientViewOn={true}
                    onStatusChange={getToggledValue}
                />
                <CustomDropDown
                    items={items}
                    optionText='text'
                    onItemChange={onItemChange}
                    selectedOption={1}
                    optionValue="id"
                    selectClass={selectClass}
                />
            </div>
        </div>
    );
}

export default UserNameBar;