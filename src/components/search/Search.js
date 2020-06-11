import React from 'react';
import './Search.scss';
import SearchIcon from '../../images/search-icon.svg';
import EmailIcon from '../../images/email.svg';
import CalendarIcon from '../../images/calendar.svg';
import ActivityIcon from '../../images/activity.svg';
import GridIcon from '../../images/grid.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {

    const searchCallBack = (event) => {
        if (event.which === 13) { //code of enter button is 13
            props.searchCallBack(event.target.value)
        }
    }

    const onMenuIconClick = (id) => {
        props.onSearchMenuIconClick(id)
    }

    return (
        <div className="search-container">
            <img className="search-icon" src={SearchIcon} alt="search" />
            <input
                className="search-input"
                type="text"
                placeholder="Search Guardian Online..."
                onKeyPress={searchCallBack} />
            <div className="search-menu-font">
                <FontAwesomeIcon icon="envelope-open-text" onClick={() => onMenuIconClick(1)} />
            </div>
            <div className="search-menu-font">
                <FontAwesomeIcon icon="calendar-alt" onClick={() => onMenuIconClick(2)} />
            </div>
            <img className="search-menu-icon" src={ActivityIcon} onClick={() => onMenuIconClick(3)} alt="activity" />
            <img className="search-menu-icon" src={GridIcon} onClick={() => onMenuIconClick(4)} alt="grid" />

        </div>
    )
}

export default Search;