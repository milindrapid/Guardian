import React from 'react';
import './ImportantNotice.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImportantNotice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #1c6ef2;
    vertical-align: middle;
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;

    infoIcon{
        font-size: 24px;
        align-self: center;
        color: white;
    }

    span{
        text-align: center;
        color: white;
        font-size: 20px;
        align-self: center;
        padding-left: 1.5rem;
        font-weight: normal;
        font-style: normal;
        font-family:Effra;  
    }

    a{
        color: white;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
        align-self: center;
        font-weight: normal;
        font-style: normal;
        padding-left: 5px;
        font-family:Effra;
        &:hover{
            color: white
        }
    }

    infoCloseIcon{
        font-size: 24px;
        color: white;
        align-self: center;
        position: absolute;
        right: 0;
        padding-right: 2.5rem;
        cursor: pointer;
    }
`;


const importantNotice = (props) => {

    const { message, linkText, url } = props

    const closeNotice = () => {
        props.close()
    }

    return (
        <ImportantNotice>
            <infoIcon><FontAwesomeIcon icon="info-circle" /></infoIcon>
            <span>{message}</span>
            <a href={url}>{linkText}</a>
            <infoCloseIcon>
                <FontAwesomeIcon icon="times" onClick={closeNotice} />
            </infoCloseIcon>
        </ImportantNotice>
    )
}

ImportantNotice.propTypes = {
    message: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default importantNotice;