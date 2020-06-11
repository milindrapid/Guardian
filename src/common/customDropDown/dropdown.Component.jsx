import React, { useState, useEffect } from 'react';
import './dropdown.scss';

/**
 * @description
 * @name CustomDropDown - Component used for dropdown
 * @param {any} selectedOption option to be selected initially
 * @param {string} label label to be displayed - default Select
 * @param {Array<Object>} items List of items to be displayed - Required eg: [{item: 'test', value:'test'}]
 * @param {string} optionText Field of the object to be displayed - Required eg: item
 * @param {string} optionValue Field of the object to be set as value - Required
 * @param {Function} onItemChange Callback function to be invoked when changes page
 * 
 * @returns {item} currentPage - Currently selected item
 */

const CustomDropDown = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayLabel, setDisplayLabel] = useState('');

    useEffect(() => {
        let tempSelected = props.selectedOption ? props.selectedOption : null;
        if (!tempSelected && props.items && props.items.length) {
            tempSelected = props.items[0];
            if (props.optionValue) {
                tempSelected = tempSelected[props.optionValue];
            }
        }
        setSelectedOption(tempSelected);
        setDisplayLabel(props.label ? props.label : 'Select');
    }, []);

    const onItemChange = (event) => {
        setSelectedOption(event.target.value);
        props.onItemChange({ selected: event.target.value });
    }

    return (
        <>
            <div className="custom-dropdown">
                <select className="custom-dropdown-select" style={props.selectClass ? props.selectClass : null} id="customDropdown" value={selectedOption} onChange={(event) => onItemChange(event)}>
                    <option style={props.optionClass ? props.optionClass : null} selected={!selectedOption ? true : false}>{displayLabel}</option>
                    {
                        props.items.map((item) => {
                            return (
                                <option value={props.optionValue ? item[props.optionValue] : item}>
                                    {item[props.optionText]}
                                </option>
                            );
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default CustomDropDown;