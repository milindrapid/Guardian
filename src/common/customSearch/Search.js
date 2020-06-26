import React from 'react';
import './Search.scss';
import SearchIcon from '../../images/search-icon.svg';

const searchBar = (props) => {

    const searchResultCallBack = (event) => {
        if (event.which === 13) {
            props.searchResultCallBack(event.target.value)
        }
    }

    return (
        <div style={props.searchBarCustomStyles} className="search-container">
            <img className="search-icon" src={SearchIcon} alt="search" />
            <input
                className="search-input"
                type="text"
                placeholder={props.placeHolder}
                onKeyPress={searchResultCallBack} />
        </div>
    )
}

export default searchBar;