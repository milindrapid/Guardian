import React from 'react';
import './GuradianUpdates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GuradianUpdatesBaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid #A7A8AA;
    background-color: white;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 2rem 2rem 0 2rem;

    mainTitle{
        font-style:normal;
        font-size: 1.5rem;
        line-height:1.625rem;
        font-weight: bold;
        color: #0D3F5E;
        margin-bottom: .625rem;
    }

    ul{
        padding-left: 0;
    }
`;

const DataContent = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        position: relative;

        closeImage{
            right: 0;
            font-size: 1rem;
            font-weight: 900;
            padding: 0.75rem;
            margin-right: 1.5rem;
            margin-top: .3rem;
            cursor: pointer;
            position: absolute;
        }

        h1{
            color: #2B2B2B;
            margin-top: 1rem;
            font-style:normal;
            font-weight: bold;
            font-size: 1.25rem;
            line-height:1.5rem;
        }

        a{
            width: fit-content;
            font-size: 1rem;
            line-height:1.25rem;
            color: #00728d;
            font-style:normal;
            font-weight: bold;
            text-decoration: underline;
            cursor: pointer;
            margin-bottom:.5rem;
            &:hover{
                color: #00728d;
            }
        }
        span{
            width: fit-content;
            font-style:normal;
            font-weight: normal;
            font-size: 1rem;
            line-height:1.3rem;
        }
        horizontelLine{
            width: 100%;
            height: 1px;
            background-color: grey;
            margin-top: 1rem;
            margin-bottom: 1rem;
            opacity: 0.3;
        }
`;

const GotoLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a{
        width: fit-content;
        font-size: 1rem;
        color: #00728d;
        text-decoration:underline;
        font-style:normal;
        font-weight: bold;
        line-height:1.25rem;
    }

    rightArrow{
        font-style:normal;
        font-weight:900;
        font-size:1rem;
        line-height:1rem;
        align-self: center;
        color:#0D3F5E;
        margin-left: 0.5rem;
    }
`;

const GuradianUpdates = (props) => {

    const { data } = props;

    const getGuardianUpdates = () => {
        return (
            data.map(update => (
                <DataContent>
                    <closeImage><FontAwesomeIcon icon='times' /></closeImage>
                    <h1>{update.title}</h1>
                    <a href='/'>{update.link}</a>
                    <span>{update.content}</span>
                    <horizontelLine />
                </DataContent>
            ))
        )
    }

    return (
        <GuradianUpdatesBaseContainer>
            <mainTitle>Updates from Guardian</mainTitle>
            <ul>{getGuardianUpdates()}</ul>
            <GotoLinkContainer>
                <a href='/'>Go to Resource Center</a>
                <rightArrow><FontAwesomeIcon icon='arrow-right' /></rightArrow>
            </GotoLinkContainer>
        </GuradianUpdatesBaseContainer>
    )
}

GuradianUpdates.propTypes = {
    data: PropTypes.array.isRequired
}

export default GuradianUpdates;