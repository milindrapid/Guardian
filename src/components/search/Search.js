import React from 'react';
import './Search.scss';

const Search = (props) => {

    const searchCallBack = (event) => {
        if (event.which === 13) { //code of enter button is 13
            props.searchCallBack(event.target.value)
        }
    }

    return (
        <div className="search-tools">
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                onKeyPress={searchCallBack} />
        </div>
    )
}

export default Search;