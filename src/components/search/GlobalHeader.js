import React from 'react';
import SearchIcon from '../../images/search-icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBar = styled.div`
    height:4rem;
    top:0;
    left:0;
    right:0;
    display: flex;
    flex-direction: row;
    position: relative;
    padding:0 1rem 0 1.2rem;
    background-color: white;
`;
const SearchInput = styled.input`
    width: 100%;
    padding: 1.4rem 1.3rem 1.4rem 0;
    border: none;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: normal;
    font-family:Effra;
    color: #75757b;
    &:focus{
        outline: none;
    }
`;
const SearchMenuIcons = styled.div`
    height:4rem;
    padding-right:1rem;
    ul{
        height:100%;
        display:flex;
        flex-direction:row;
    }
`;
const SearchMenuFontIcon = styled.div`
    font-style:normal
    font-weight: 900;
    align-self: center;
    color: #0d3f5e;
    li{
        font-size: 1.25rem;
        margin-left:.35rem;
    }
    &:hover{
        color: #09809b
    }
`;
const SearchMenuSVGIcon = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    align-self: center;
    margin-left: 1.3rem;
    margin-right: 1.25rem;
    padding: 1px;
`;

const globalHeaderIconList = [
    {
        id: 1,
        name: "Email",
        image: "envelope-open-text"
    },
    {
        id: 2,
        name: "Calender",
        image: "calendar-alt"
    },
    {
        id: 3,
        name: "Activity",
        image: "chart-line"
    },
    {
        id: 4,
        name: "Favorite Tools",
        image: "th"
    }
]


const GlobalHeader = (props) => {
    const { placeHolder, searchCallBack, onSearchMenuIconClick } = props

    const searchResultCallBack = (event) => {
        if (event.which === 13) { //code of enter button is 13
            searchCallBack(event.target.value)
        }
    }

    const onMenuIconClick = (id) => {
        onSearchMenuIconClick(id)
    }

    const getIcons = () => {
        return (
            globalHeaderIconList.map(icon => (
                <SearchMenuFontIcon>
                    <li key={icon.id}>
                        <FontAwesomeIcon
                            icon={icon.image}
                            onClick={() => onMenuIconClick(icon.id)} />
                    </li>
                </SearchMenuFontIcon>
            ))
        )
    }

    return (
        <SearchBar>
            <SearchMenuSVGIcon src={SearchIcon} />
            <SearchInput
                type="text"
                placeholder={placeHolder}
                onKeyPress={searchResultCallBack} />

            <SearchMenuIcons>
                <ul>
                    {getIcons()}
                </ul>
            </SearchMenuIcons>
        </SearchBar>
    )
}

GlobalHeader.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    searchCallBack: PropTypes.func.isRequired,
    onSearchMenuIconClick: PropTypes.func.isRequired
};

export default GlobalHeader;