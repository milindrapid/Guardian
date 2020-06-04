import React from 'react';
import './Search.scss';
import SearchIcon from '../../images/search-icon.svg';
import EmailIcon from '../../images/email.svg';
import CalendarIcon from '../../images/calendar.svg';
import ActivityIcon from '../../images/activity.svg';
import GridIcon from '../../images/grid.svg';

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
            <img className="search-menu-icon" src={EmailIcon} onClick={() => onMenuIconClick(1)} alt="email" />
            <img className="search-menu-icon" src={CalendarIcon} onClick={() => onMenuIconClick(2)} alt="calendar" />
            <img className="search-menu-icon" src={ActivityIcon} onClick={() => onMenuIconClick(3)} alt="activity" />
            <img className="search-menu-icon" src={GridIcon} onClick={() => onMenuIconClick(4)} alt="grid" />

        </div>
    )
}

export default Search;